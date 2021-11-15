import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ManageProducts.css';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // For Delete Product
    const handleProductDelete = id => {
        const confirm = window.confirm("Are you sure?");

        if (confirm) {
            setIsLoading(true);

            fetch(`https://lit-tor-41260.herokuapp.com/apartments/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIsLoading(false);
                    };
                });
        };
    };

    // For Load All Products
    useEffect(() => {
        fetch(`https://lit-tor-41260.herokuapp.com/apartments`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            });
    }, [products]);

    return (
        <Container className="orders my-5">
            <h2 className="pink-text cursive-text display-6 text-center mb-4">
                Manage Products
            </h2>

            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <Container >
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                            {products.map(product => {
                                return (
                                    // Single Product
                                    <div className="col product">
                                        <div className="card h-100">
                                            <img src={product.image} className="card-img-top" alt={product.name} />
                                            <div className="card-body">
                                                <h4 className="card-title cursive-text text-center">
                                                    {product.name}
                                                </h4>

                                                <p className="card-text more-small-text text-muted text-justify">
                                                    {product.description.slice(0, 200)}
                                                </p>

                                                <div className="row mb-2">
                                                    <div className="col-6">
                                                        <div className="more-small-text text-muted">
                                                            <span>Price: </span>
                                                            <span className="fw-bold">${product.price}</span>
                                                        </div>
                                                    </div>

                                                    <div className="col-6">
                                                        <div className="text-end me-1">
                                                            <div className="more-small-text text-muted">
                                                                <span>Sqft: </span>
                                                                <span className="fw-bold">{product.sqft}</span>
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
                                                                    <span className="fw-bold">{product.beds}</span>
                                                                </div>
                                                            </div>

                                                            <div className="text-end me-1">
                                                                <div className="more-small-text text-muted">
                                                                    <span>Bath: </span>
                                                                    <span className="fw-bold">{product.bath}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-footer border-0 bg-white p-0">
                                                <button
                                                    onClick={() => handleProductDelete(product._id)}
                                                    className="btn btn-danger text-white px-4 w-100 rounded-0 order-btn"
                                                >
                                                    DELETE
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
            }
        </Container >
    );
};

export default ManageProducts;