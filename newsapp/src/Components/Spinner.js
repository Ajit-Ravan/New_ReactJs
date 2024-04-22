import React from 'react'
import loading from "./loading.gif";

const Spinner = () => {

    return (
        <div className='text-center' style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <img src={loading} alt="loading.." />
        </div>
    )

}

export default Spinner;