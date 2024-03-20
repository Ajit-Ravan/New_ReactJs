import React, { Component } from 'react'
import loading from "./loading.gif";

export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center' style={{ paddingTop: '100px', paddingBottom: '100px' }}>
                <img src={loading} alt="loading.." />
            </div>
        )
    }
}
