import React from 'react';
import './Review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = props => {
    const { name, email, message, rating } = props.review;

    // For dynamic rating
    const ratingArray = Array.from(Array(rating).keys());

    return (
        <div className="col product">
            <div className="card h-100">
                <img src="https://i.ibb.co/LnV51kb/default-user.png" className="card-img-top w-25 mx-auto pt-3" alt={name} />
                <div className="card-body">
                    <h4 className="card-title cursive-text text-center">
                        {name}
                    </h4>

                    <p className="card-text more-small-text text-muted text-justify">
                        {message}
                    </p>

                    <div className="row">
                        {/* For dynamic rating */}
                        <div className="col-6">
                            {ratingArray.map(() => {
                                return (
                                    <>
                                        <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                    </>
                                );
                            })}
                        </div>

                        <div className="col-6">
                            <div className="text-end">
                                <div className="more-small-text text-muted mt-1">
                                    <span className="fw-bold">{email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer border-0 bg-white p-0">

                </div>
            </div>
        </div>
    );
};

export default Review;