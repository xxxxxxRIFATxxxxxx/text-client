import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = props => {
    const { name, message, rating } = props.review;
    const ratingArray = Array.from(Array(rating).keys());

    return (
        <div className="col product">
            <div className="card h-100 border-0 shadow">
                <div className="card-body">
                    <h4 className="card-title cursive-text text-center">
                        {name}
                    </h4>

                    <p className="card-text text-dark text-justify">
                        {message}
                    </p>

                    <div className="row">
                        {/* Rating */}
                        <div className="col-12 text-center">
                            {ratingArray.map(() => {
                                return (
                                    <>
                                        <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;