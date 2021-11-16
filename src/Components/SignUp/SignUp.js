import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './SignUp.css';

const SignUp = () => {
    const history = useHistory();
    const location = useLocation();
    const {
        signUpWithEmail,
        errorMessage,
    } = useAuth();

    // Handle Sign UP
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            signUpWithEmail(data.email, data.password, data.displayName, history, location);
            reset();
        }
    };

    return (
        <div className="signup">
            <div className="container login">
                <h1 className="cursive-text text-white text-center mb-3">Sign UP</h1>

                <div className="row row-cols-1 row-cols-md-1 g-4">
                    {/* Registration Form */}
                    <div className="col-12">
                        <div className="card h-100">
                            <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                    Registration
                                </h6>

                                <div className="mb-3">
                                    <input
                                        className="form-control border-0 border-bottom"
                                        type="text"
                                        placeholder="Full Name"
                                        {...register("displayName", { required: true })}
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
                                        type="password"
                                        placeholder="Password"
                                        {...register("password", { required: true })}
                                    />
                                </div>

                                <div className="mb-3">
                                    <input
                                        className="form-control border-0 border-bottom"
                                        type="password"
                                        placeholder="Confirm Password"
                                        {...register("confirmPassword", { required: true })}
                                    />
                                </div>

                                <input className="btn btn-danger text-white w-100 py-2 fw-normal" type="submit" value="Sign Up" />

                                <div className="form-text mt-1 text-center">
                                    <NavLink className="text-danger text-decoration-none ms-1 fs-2 text-center" to="/login">
                                        Login
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                {errorMessage ? <div className="alert alert-danger text-center mb-5">
                    {errorMessage ? <h6 className="text-danger">{errorMessage}</h6> : null}
                </div> : null}
            </div>
        </div>
    );
};

export default SignUp;