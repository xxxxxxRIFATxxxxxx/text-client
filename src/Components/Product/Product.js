import React from 'react';
import './Product.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Product = props => {
    const { _id, name, price, image, description, beds, bath } = props.product;

    return (
        <div className="col product">
            <div className="card h-100 border-0 shadow">
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h4 className="card-title cursive-text text-center">
                        {name}
                    </h4>

                    <p className="card-text">
                        {description}
                    </p>

                    <div className="row mb-2">
                        <div className="col-12 text-center">
                            <div className="text-dark">
                                <span>Price: </span>
                                <span className="fw-bold">${price}</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="d-flex justify-content-center">
                                <div className="text-end me-1">
                                    <div className="text-dark">
                                        <span>Bed Room: </span>
                                        <span className="fw-bold">{beds}</span>
                                    </div>
                                </div>

                                <div className="text-end me-1">
                                    <div className="text-dark">
                                        <span>Bath Room: </span>
                                        <span className="fw-bold">{bath}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-footer border-0 bg-white p-0 text-center my-3">
                    <NavLink to={`/booking/${_id}`} className="btn btn-danger text-white px-4 text-center order-btn">
                        Order
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;