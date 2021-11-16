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

            fetch(`https://pure-brushlands-94522.herokuapp.com/apartments/${id}`, {
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
        fetch(`https://pure-brushlands-94522.herokuapp.com/apartments`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            });
    }, [products]);

    return (
        <Container className="orders my-5">
            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <Container >
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">

                            {products.map(product => {
                                return (
                                    // Single Product
                                    <div className="col product">
                                        <div className="card h-100">
                                            <div className="card-footer border-0 bg-white p-0">
                                                <button
                                                    onClick={() => handleProductDelete(product._id)}
                                                    className="btn btn-danger text-white px-4 w-100 rounded-0 order-btn"
                                                >
                                                    DELETE
                                                </button>
                                            </div>
                                            <img src={product.image} className="card-img-top" alt={product.name} />
                                            <div className="card-body">
                                                <h4 className="card-title cursive-text text-center">
                                                    {product.name}
                                                </h4>

                                                <div className="row mb-2">
                                                    <div className="col-6">
                                                        <div className="more-small-text text-muted">
                                                            <span>Price: </span>
                                                            <span className="fw-bold">${product.price}</span>
                                                        </div>
                                                    </div>
                                                </div>
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