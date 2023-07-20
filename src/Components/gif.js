import React from 'react'
import loading from './loading.gif'

const Gif = () => {
    return (
        <div>
            <div className=' conatiner my-3' style={{ textAlign: "center" }}>
                <img style={{ width: '60px' }} src={loading} alt='loading' />
            </div>
        </div>
    )
}

export default Gif;