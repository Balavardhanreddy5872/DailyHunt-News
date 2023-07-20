import React, { Component } from 'react'
import loading from './loading.gif'
export default class Gif extends Component {
    render() {
        return (
            <div>
                <div className=' conatiner my-3' style={{ textAlign: "center" }}>
                    <img style={{ width: '60px' }} src={loading} alt='loading' />
                </div>
            </div>
        )
    }
}
