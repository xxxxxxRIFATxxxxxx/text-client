import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { useParams, useHistory, NavLink } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Booking = () => {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`https://pure-brushlands-94522.herokuapp.com/apartments/${id}`)
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
        data.beds = product.beds;
        data.bath = product.bath;
        data.status = "Pending";
        setIsLoading(true);

        fetch("https://pure-brushlands-94522.herokuapp.com/orders", {
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
                            {/* Order Form */}
                            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
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

                                        <input className="btn btn-danger text-white w-100 py-2 fw-normal" type="submit" value="Order" />
                                    </form>
                                </div>
                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                                <div className="card h-100 border-0 shadow">
                                    <img src={product.image} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title cursive-text text-center">
                                            {product.name}
                                        </h4>

                                        <p className="card-text">
                                            {product.description}
                                        </p>

                                        <div className="row mb-2">
                                            <div className="col-12 text-center">
                                                <div className="text-dark">
                                                    <span>Price: </span>
                                                    <span className="fw-bold">${product.price}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <div className="d-flex justify-content-center">
                                                    <div className="text-end me-1">
                                                        <div className="text-dark">
                                                            <span>Bed Room: </span>
                                                            <span className="fw-bold">{product.beds}</span>
                                                        </div>
                                                    </div>

                                                    <div className="text-end me-1">
                                                        <div className="text-dark">
                                                            <span>Bath Room: </span>
                                                            <span className="fw-bold">{product.bath}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-footer border-0 bg-white p-0 text-center my-3">
                                        <NavLink to={`/booking/${product._id}`} className="btn btn-danger text-white px-4 text-center order-btn">
                                            Order
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
            }
        </Container>
    );
};

export default Booking;