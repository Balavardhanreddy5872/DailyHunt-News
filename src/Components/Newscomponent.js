import React, { Component } from 'react'
import Newitem from './Newitem'
import Gif from './gif';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



export default class Newscomponent extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 10,
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("hi")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

        document.title = `DailyHunt-${this.capitalizeFirstLetter(this.props.category)}`

    }

    updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
        fetch(url).then((response) => response.json())
            .then((data) => {
                this.setState({
                    articles: data.articles,
                    totalResults: data.totalResults,
                    loading: false
                });
            });
    }

    componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = () => {
        this.setState({
            page: this.state.page + 1
        })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`
        fetch(url).then((response) => response.json())
            .then((data) => {
                this.setState({
                    articles: this.state.articles.concat(data.articles),
                    totalResults: data.totalResult,
                    loading : false
                });
                
            });
    }


    render() {

        return (
            <>

                <h1 style={{ textAlign: "center", margin: '23px 10px' }}>DailyHunt-{this.capitalizeFirstLetter(this.props.category)} Top Headlines</h1>
                {/* loader gif */}
                {/* {this.state.loading && <Gif />} */}

                {/* Adding infinte scroll  */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    loader={  <Gif />}
                    hasMore={this.state.articles.length !== this.totalResults}
                    
                >

                    <div className="container">
                        {/* Arranging in row   */}
                        <div className='row'>
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newitem title={element.title} description={element.description} iurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                    
                </InfiniteScroll>


            </>
        )
    }
}

