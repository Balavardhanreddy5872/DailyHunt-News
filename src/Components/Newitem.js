import React, { Component } from 'react'

export default class Newitem extends Component {
    render() {
       let {title,description,iurl,url,author,date,source} = this.props
        return (
            <div className='my-3'>
                {/* Each News item  */}
                <div className="card"  key={url}>
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
   
                    <img src={!iurl?'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg':iurl} className="card-img-top" alt=''/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toUTCString()}</small></p>
                        <a  rel="noopener noreferrer" href= {url} target='_blank' className="btn  btn-sm btn-dark">ReadMore</a>
                    </div>
                </div>
            </div>
        )
    }
}
