import React, { Component } from 'react'
import Newitem from './Newitem'
import Gif from './gif';
import PropTypes from 'prop-types'



export default class Newscomponent extends Component {
    static defaultProps = {
        country: 'in',
        pagesize: 10,
        category: 'general'
    }
    static propTypes = {
        category: PropTypes.string
    }

    constructor() {
        super();
        console.log("hi")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=019b22abf7414e46b7a4cdb804564677&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({ loading: true })
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

    handleprevclick = () => {
        console.log("previous")
        this.setState({ page: this.state.page - 1 }, () =>
            this.updateNews());
    }

    handlenextclick = () => {
        console.log("next")
        this.setState({ page: this.state.page + 1 }, () =>
            this.updateNews());
    }



    render() {

        return (
            <div className='container my-3 '>

                <h1 style={{ textAlign: "center", margin: '23px 10px' }}>DailyHunt -Headlines</h1>

                {/* previous and Next buttons */}
                <div className="conatiner d-flex justify-content-between" style={{ margin: '23px 10px' }}>
                    <button type="button" className="btn btn-dark" onClick={this.handleprevclick} disabled={this.state.page <= 1}>&larr; Prev</button>
                    <button type="button" className="btn btn-dark" onClick={this.handlenextclick} disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)}>Next  &rarr;</button>
                </div>
                {/* loader gif */}
                {this.state.loading && <Gif />}

                {/* Arranging in row   */}
                <div className='row'>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newitem title={element.title} description={element.description} iurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>


            </div>
        )
    }
}

