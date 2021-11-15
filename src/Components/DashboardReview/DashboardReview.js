import React, { useState } from 'react';
import './DashboardReview.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import writingGif from './writing.gif';
import useAuth from '../../Hooks/useAuth';

const DashboardReview = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    // For User
    const { user } = useAuth();

    // For Handle Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.rating = parseInt(data.rating);
        setIsLoading(true);

        fetch("https://lit-tor-41260.herokuapp.com/reviews", {
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
                            {/* Add Review Form */}
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                            Post a Review
                                        </h6>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="text"
                                                placeholder="Name"
                                                value={user.displayName}
                                                {...register("name", { required: true })}
                                                readOnly
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <input
                                                className="form-control border-0 border-bottom"
                                                type="email"
                                                placeholder="example@email.com"
                                                value={user.email}
                                                {...register("email", { required: true })}
                                                readOnly
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <select
                                                class="form-select"
                                                {...register("rating", { required: true })}
                                            >
                                                <option selected>Rating</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <textarea
                                                className="form-control border-0 border-bottom"
                                                placeholder="Message"
                                                {...register("message", { required: true })}>
                                            </textarea>
                                        </div>

                                        <input className="btn btn-info text-white w-100 py-2 fw-normal" type="submit" value="Post" />
                                    </form>
                                </div>
                            </div>

                            {/* Service GIF */}
                            <div className="col col-12 col-sm-12 col-md-6">
                                {
                                    showAlert
                                        ?
                                        <div className="alert alert-success">
                                            Review posted successfully
                                        </div>

                                        :

                                        <div className="card h-100 border-0 d-flex align-items-center justify-content-center">
                                            <img className="img-fluid" src={writingGif} alt="working man" />
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
            }
        </Container>
    );
};

export default DashboardReview;