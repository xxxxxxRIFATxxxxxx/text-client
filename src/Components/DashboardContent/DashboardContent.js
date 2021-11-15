import React, { useEffect, useState } from 'react';
import './DashboardContent.css';

const DashboardContent = () => {
    const [users, setUsers] = useState([]);
    const [apartments, setApartments] = useState([]);
    const [orders, setOrders] = useState([]);
    const [reviews, setReviews] = useState([]);

    // For Users
    useEffect(() => {
        fetch("https://lit-tor-41260.herokuapp.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            });
    }, []);

    // For Apartments
    useEffect(() => {
        fetch("https://lit-tor-41260.herokuapp.com/apartments")
            .then(res => res.json())
            .then(data => {
                setApartments(data);
            });
    }, []);

    // For Orders
    useEffect(() => {
        fetch("https://lit-tor-41260.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            });
    }, []);

    // For Reviews
    useEffect(() => {
        fetch("https://lit-tor-41260.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);
    return (
        <div>
            {/* <!-- Header --> */}
            <div>
                <div className="mb-4">
                    <h4>Dashboard</h4>
                    <p className="text-muted">
                        Dashboard is a visual display of all of our data.
                    </p>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-4 g-3 mb-3">
                {/* <!-- Total Users --> */}
                <div className="col">
                    <div className="card h-100 square-radius bg-info text-white">
                        <div className="card-body pb-0">
                            <div className="d-flex justify-content-around">
                                <div className="text-center">
                                    <i className="fas fa-users p-2 square-radius"></i>
                                </div>

                                <div>
                                    <h5 className="card-title fs-6 mb-0">
                                        Total Users
                                    </h5>
                                    <p className="card-text">
                                        <h4 className="text-center">
                                            {users.length}
                                        </h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Total Apartments --> */}
                <div className="col">
                    <div className="card h-100 square-radius bg-info text-white">
                        <div className="card-body pb-0">
                            <div className="d-flex justify-content-around">
                                <div className="text-center">
                                    <i className="fas fa-home p-2 square-radius"></i>
                                </div>

                                <div>
                                    <h5 className="card-title fs-6 mb-0">
                                        Total Apartments
                                    </h5>
                                    <p className="card-text">
                                        <h4 className="text-center">
                                            {apartments.length}
                                        </h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Total Orders --> */}
                <div className="col">
                    <div className="card h-100 square-radius bg-info text-white">
                        <div className="card-body pb-0">
                            <div className="d-flex justify-content-around">
                                <div className="text-center">
                                    <i className="fas fa-shopping-cart p-2 square-radius"></i>
                                </div>

                                <div>
                                    <h5 className="card-title fs-6 mb-0">
                                        Total Orders
                                    </h5>
                                    <p className="card-text">
                                        <h4 className="text-center">
                                            {orders.length}
                                        </h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Total Reviews --> */}
                <div className="col">
                    <div className="card h-100 square-radius bg-info text-white">
                        <div className="card-body pb-0">
                            <div className="d-flex justify-content-around">
                                <div className="text-center">
                                    <i className="fas fa-edit p-2 square-radius"></i>
                                </div>

                                <div>
                                    <h5 className="card-title fs-6 mb-0">
                                        Total Reviews
                                    </h5>
                                    <p className="card-text">
                                        <h4 className="text-center">
                                            {reviews.length}
                                        </h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;