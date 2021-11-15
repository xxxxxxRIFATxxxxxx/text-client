import React, { useState } from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import rocketGif from './rocket.gif';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false)

    // For Handle Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setIsLoading(true);

        fetch("https://lit-tor-41260.herokuapp.com/contact", {
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
            {/* Contact Banner */}
            <div className="product-banner text-center">
                <h4 className="display-6 cursive-text product-title">
                    Get in touch
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            While we’re good with smoke signals, there are simpler ways for us
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            to get in touch.
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
                            {/* Contact GIF */}
                            <div className="col col-12 col-sm-12 col-md-6">
                                {
                                    showAlert
                                        ?
                                        <div className="alert alert-success">
                                            Thank you for contacting us
                                        </div>

                                        :

                                        <div className="card h-100 border-0 d-flex align-items-center justify-content-center">
                                            <img className="img-fluid" src={rocketGif} alt="mail" />
                                        </div>
                                }
                            </div>

                            {/* Contact Form */}
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                            Contact
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
                                            <textarea
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Message"
                                                {...register("message", { required: true })}>
                                            </textarea>
                                        </div>

                                        <input className="btn btn-info text-white w-100 py-2 fw-normal" type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default Contact;