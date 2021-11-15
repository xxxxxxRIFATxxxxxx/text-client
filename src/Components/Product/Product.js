import React from 'react';
import './Product.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = props => {
    const { _id, name, price, image, description, sqft, beds, bath } = props.product;

    return (
        <div className="col product">
            <NavLink to={`/booking/${_id}`} className="text-decoration-none text-black">
                <div className="card h-100">
                    <img src={image} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h4 className="card-title cursive-text text-center">
                            {name}
                        </h4>

                        <p className="card-text more-small-text text-muted text-justify">
                            {description.slice(0, 200)}
                        </p>

                        <div className="row mb-2">
                            <div className="col-6">
                                <div className="more-small-text text-muted">
                                    <span>Price: </span>
                                    <span className="fw-bold">${price}</span>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="text-end me-1">
                                    <div className="more-small-text text-muted">
                                        <span>Sqft: </span>
                                        <span className="fw-bold">{sqft}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                                <FontAwesomeIcon icon={faStar} className="more-small-text text-warning me-1" />
                            </div>

                            <div className="col-6">
                                <div className="text-end d-flex justify-content-end">
                                    <div className="text-end me-1">
                                        <div className="more-small-text text-muted">
                                            <span>Bed: </span>
                                            <span className="fw-bold">{beds}</span>
                                        </div>
                                    </div>

                                    <div className="text-end me-1">
                                        <div className="more-small-text text-muted">
                                            <span>Bath: </span>
                                            <span className="fw-bold">{bath}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer border-0 bg-white p-0">
                        <NavLink to={`/booking/${_id}`} className="btn btn-info text-white px-4 w-100 rounded-0 order-btn">
                            BOOK NOW
                        </NavLink>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Product;