import '../css/404.css'
import React from 'react';

const Error = () => {
    return(
        <div className='not-found'>
            <div className='bg-nf'>
            <a className='a404-but' href='/'>Go Back</a>
            </div>

            <div id='sep'></div>
        </div>
    )
}

export default Error;