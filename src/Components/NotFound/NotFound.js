import React from 'react';
import './NotFound.css';
import notFoundGif from './notFound.gif';

const NotFound = () => {
    return (
        <div className="text-center notFound">
            <img className="img-fluid" src={notFoundGif} alt="not found" />
            <h4 className="display-6 cursive-text mb-5">Page Not Found</h4>
        </div>
    );
};

export default NotFound;