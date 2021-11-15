import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import './Careers.css';

const Careers = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false)

    // For Handle Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setIsLoading(true);

        fetch("https://pure-brushlands-94522.herokuapp.com/careers", {
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
            {/* Careers Banner */}
            <div className="product-banner text-center">
                <h4 className="display-6 cursive-text product-title">
                    We are looking for a Graphic Designer
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            If you are a pro designer then, there are simpler ways for us
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            to apply for the job.
                        </small>
                    </div>
                </div>
            </div>

            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <div>
                        <div className="row g-4">
                            {/* Careers Image */}
                            <div className="col col-12 col-sm-12 col-md-6">
                                {
                                    showAlert
                                        ?
                                        <div className="alert alert-success">
                                            Thank you for applying for the job
                                        </div>

                                        :

                                        <div className="card h-100 border-0 d-flex align-items-center justify-content-center">
                                            <img className="img-fluid" src="https://i.ibb.co/7Qk9KXy/i-Stock-879134704-1.jpg" alt="job" />
                                        </div>
                                }
                            </div>

                            {/* Careers Form */}
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                            Job Application Form
                                        </h6>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Name"
                                                {...register("name", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="email"
                                                placeholder="Email"
                                                {...register("email", { required: true })}
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Skills"
                                                {...register("skills", { required: true })}
                                            />
                                        </div>

                                        <input className="btn btn-info text-white w-100 py-2 fw-normal" type="submit" value="Apply" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default Careers;