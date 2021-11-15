import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Booking = () => {
    // For User
    const { user } = useAuth();

    // For Loading
    const [isLoading, setIsLoading] = useState(false);

    // For Tour
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://lit-tor-41260.herokuapp.com/apartments/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, []);

    // For Handle Form
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.apartmentName = product.name;
        data.price = product.price;
        data.image = product.image;
        data.description = product.description;
        data.sqft = product.duration;
        data.beds = product.beds;
        data.bath = product.bath;
        data.status = "Pending";
        setIsLoading(true);

        fetch("https://lit-tor-41260.herokuapp.com/orders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setIsLoading(false);
                    history.push("/dashboard");
                };
            });
    };

    return (
        <Container className="my-4 booking">
            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <div>
                        <div className="row g-4">
                            {/* Tour Details */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="card h-100">
                                    <img src={product.image} className="card-img-top" alt={product.name} />
                                    <div className="card-body">
                                        <h4 className="card-title cursive-text text-center">
                                            {product.name}
                                        </h4>

                                        <p className="card-text more-small-text text-muted text-justify">
                                            {product.description}
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
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <div className="card w-100">
                                        <div className="card-body">
                                            <div>
                                                <h4 className="cursive-text text-center">Total Price</h4>
                                                <h2 className="text-info cursive-text text-center">
                                                    $ {product.price}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Order Form */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                            Order Form
                                        </h6>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Full Name"
                                                value={user.displayName}
                                                readOnly
                                                {...register("name", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="email"
                                                placeholder="Email"
                                                value={user.email}
                                                readOnly
                                                {...register("email", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Phone Number"
                                                {...register("phone", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Address"
                                                {...register("address", { required: true })} />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Tour Name"
                                                value={product.name}
                                                readOnly
                                                {...register("apartmentName")}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="number"
                                                placeholder="$ 0.00"
                                                value={product.price}
                                                readOnly
                                                {...register("price")}
                                            />
                                        </div>

                                        <input className="btn btn-info text-white w-100 py-2 fw-normal" type="submit" value="Confirm Order" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default Booking;