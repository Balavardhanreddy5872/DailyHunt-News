import React, { useEffect, useState } from 'react'
import Newitem from './Newitem'
import Gif from './gif';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const Newscomponent = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    // Function to captlize the given string 
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // function used to respond to all tools like category , pagesize , apikey 
    const updateNews = () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
        fetch(url).then((response) => response.json())
            .then((data) => {
                setArticles(data.articles)
                setTotalResults(data.totalResults)
                setLoading(false)
            });
    }

    //  used instead of componnentdidMount in classmethod 
    useEffect(() => {
        document.title = `DailyHunt-${capitalizeFirstLetter(props.category)}`
        updateNews();
    }, [])


    //  used for infinte scrolling 
    const fetchMoreData = () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pagesize}`
        setPage(page + 1)
        fetch(url).then((response) => response.json())
            .then((data) => {
                setArticles(articles.concat(data.articles))
                setTotalResults(data.totalResults)
                setLoading(false)

            });
    }




    return (
        <>
            <h1 style={{ textAlign: "center", margin: '23px 10px', marginTop: '90px' }}>DailyHunt-{capitalizeFirstLetter(props.category)} Top Headlines</h1>
            {/* loader gif */}
            {loading && <Gif />}

            {/* Adding infinte scroll  */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                loader={<Gif />}
                hasMore={articles.length !== totalResults}

            >

                <div className="container">
                    {/* Arranging in row   */}
                    <div className='row'>
                        {articles.map((element) => {
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

//  default props 
Newscomponent.defaultProps = {
    country: 'in',
    pagesize: 10,
    category: 'general'
}

//  props types 
Newscomponent.propTypes = {
    category: PropTypes.string
}

export default Newscomponent;