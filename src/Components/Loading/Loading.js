import React from 'react';
import './Loading.css';

const Loading = () => {

    return (
        <div className="spinner-border text-danger mx-auto text-center" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};

export default Loading;