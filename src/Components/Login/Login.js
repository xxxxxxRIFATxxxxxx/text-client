import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
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
        <div className="login">
            <div className="container login">
                <div className="row row-cols-1 row-cols-md-1 g-4">
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

                                <input className="btn btn-danger text-white w-100 py-2 fw-normal" type="submit" value="Login" />

                                <div className="form-text mt-1 text-center">
                                    <NavLink className="text-danger text-decoration-none ms-1 fs-2" to="/signup">
                                        Sign Up
                                    </NavLink>
                                </div>
                            </form>

                            {errorMessage ? <div className="alert alert-danger text-center mb-5">
                                {errorMessage ? <h6 className="text-danger">{errorMessage}</h6> : null}
                            </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;