import React, { useState } from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import workingGif from './working.gif';

const AddProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false)

    // For Handle Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.rating = parseInt(data.rating);
        setIsLoading(true);

        fetch("https://pure-brushlands-94522.herokuapp.com/apartments", {
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
                    reset();
                    setShowAlert(true);
                    setTimeout(() => {
                        setShowAlert(false);
                    }, 3000);
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
                            {/* Add Product Form */}
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                            Create Product
                                        </h6>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Product Name"
                                                {...register("name", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="number"
                                                placeholder="Price"
                                                {...register("price", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Image Link"
                                                {...register("image", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <textarea
                                                className="form-control border-0 border-bottom"
                                                placeholder="Description"
                                                {...register("description", { required: true })}
                                            >
                                            </textarea>
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Square Feet"
                                                {...register("sqft", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="number"
                                                placeholder="Beds"
                                                {...register("beds", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="number"
                                                placeholder="Bath"
                                                {...register("bath", { required: true })}
                                            />
                                        </div>

                                        <input className="btn btn-info text-white w-100 py-2 fw-normal" type="submit" value="Add" />
                                    </form>
                                </div>
                            </div>

                            {/* Add Product GIF */}
                            <div className="col col-12 col-sm-12 col-md-6">
                                {
                                    showAlert
                                        ?
                                        <div className="alert alert-success">
                                            Product Added successfully
                                        </div>

                                        :

                                        <div className="card h-100 border-0 d-flex align-items-center justify-content-center">
                                            <img className="img-fluid" src={workingGif} alt="working man" />
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default AddProduct;