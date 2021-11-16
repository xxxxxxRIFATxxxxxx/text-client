import React, { useState } from 'react';
import './MakeAdmin.css';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const { user } = useAuth();

    // For Handle Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        setIsLoading(true);

        fetch(`https://pure-brushlands-94522.herokuapp.com/users/admin?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(updatedResult => {
                if (updatedResult) {
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

                            <div className="col col-12 col-sm-12 col-md-3">
                                {
                                    showAlert
                                        ?
                                        <div className="alert alert-success">
                                            success
                                        </div>

                                        :
                                        null
                                }
                            </div>

                            {/* Admin Form */}
                            <div className="col-12 col-sm-12 col-md-9">
                                <div className="card h-100">
                                    <form className="bg-white p-4" onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <input
                                                className="form-control"
                                                type="email"
                                                {...register("email", { required: true })} />
                                        </div>

                                        <input className="btn btn-danger text-white w-100 py-2 fw-normal" type="submit" value="Make Admin" />
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
            }
        </Container>
    );
};

export default MakeAdmin;