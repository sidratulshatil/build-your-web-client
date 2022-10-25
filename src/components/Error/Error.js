import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className='error-div'>
            <h2 className='error-header'>404</h2>
            <div>
                <p className='error-p'>
                    There's nothing here.
                </p>
            </div>
            <div>
                <p className='error-p'><strong>Find what you're looking for with our site.</strong></p>
            </div>
            <div>
                <Link className='error-btn ' to={'/'} >Go Home</Link>
            </div>
        </div>
    );
};

export default Error;