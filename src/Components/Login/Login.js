import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import loginGif from './login.gif';
import policeGif from './police.gif';
import './Login.css';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const {
        loginWithEmail,
        errorMessage,
    } = useAuth();

    // Handle Sign In
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        loginWithEmail(data.email, data.password, history, location);
        reset();
    };

    return (
        <div className="login blue-bg">
            <div className="container login">
                {/* Error Message */}
                {errorMessage ? <div className="alert alert-danger text-center mb-5">
                    {errorMessage ? <h6 className="text-danger">{errorMessage}</h6> : null}
                </div> : null}

                <h1 className="cursive-text text-white text-center mb-5">Who are you?</h1>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/* GIF Image */}
                    <div className="col">
                        <img className="img-fluid" src={loginGif} alt="login" />
                    </div>

                    {/* Login Form */}
                    <div className="col">
                        <div className="card h-100">
                            <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                <h6 className="form-control border-0 fw-bold fs-5 mb-3 booking-title text-center">
                                    Login
                                </h6>

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

                                <input className="btn btn-info text-white w-100 py-2 fw-normal" type="submit" value="Login" />

                                <div className="form-text mt-1">
                                    Don't have account?
                                    <NavLink className="text-info text-decoration-none ms-1" to="/signup">
                                        Registration
                                    </NavLink>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* GIF Image */}
                    <div className="col">
                        <img className="img-fluid" src={policeGif} alt="login" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;