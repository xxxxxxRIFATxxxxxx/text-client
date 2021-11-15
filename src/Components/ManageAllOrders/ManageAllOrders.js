import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';
import './ManageAllOrders.css';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // For Delete Order
    const handleOrderDelete = id => {
        const confirm = window.confirm("Are you sure?");

        if (confirm) {
            setIsLoading(true);

            fetch(`https://lit-tor-41260.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    if (result.deletedCount) {
                        setIsLoading(false);
                    };
                });
        };
    };

    // For Update Order
    const handleOrderUpdate = id => {
        setIsLoading(true);
        let data = {};

        fetch(`https://lit-tor-41260.herokuapp.com/orders?id=${id}`)
            .then(res => res.json())
            .then(result => {
                result.status = "Approved";
                data = result;

                // Update Data
                fetch(`https://lit-tor-41260.herokuapp.com/orders/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                })
                    .then(response => response.json())
                    .then(updatedResult => {
                        if (updatedResult.modifiedCount) {
                            setIsLoading(false);
                        };
                    });
            });
    };

    // For Load Users Own Orders
    useEffect(() => {
        fetch(`https://lit-tor-41260.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setIsLoading(false);
            });
    }, [orders]);

    return (
        <Container className="orders my-5">
            <h2 className="pink-text cursive-text display-6 text-center mb-4">
                Manage all orders
            </h2>

            {
                isLoading
                    ?
                    <Loading></Loading>
                    :
                    <div className="table-container">
                        <table>
                            {/* Table Header */}
                            <tr>
                                <th>Name</th>
                                <th>Order ID</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Tour Name</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th colSpan="2" className="text-center">Action</th>
                            </tr>

                            {/* Table Data */}
                            {
                                orders.map(order => {
                                    return (
                                        <tr key={order._id}>
                                            <td>
                                                {order.name}
                                            </td>

                                            <td>
                                                {order._id}
                                            </td>

                                            <td>
                                                {order.email}
                                            </td>

                                            <td>
                                                {order.phone}
                                            </td>

                                            <td>
                                                {order.date}
                                            </td>

                                            <td>
                                                {order.tourName}
                                            </td>

                                            <td>
                                                {order.price}
                                            </td>

                                            <td>
                                                {
                                                    order.status === "Pending"
                                                        ?
                                                        <span className="badge bg-warning fs-6 py-2">{order.status}</span>
                                                        :
                                                        <span className="badge bg-success fs-6 py-2">{order.status}</span>
                                                }
                                            </td>

                                            <td>
                                                <button
                                                    onClick={() => handleOrderDelete(order._id)}
                                                    className="btn btn-danger">
                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                </button>
                                            </td>

                                            <td>
                                                <button
                                                    onClick={() => handleOrderUpdate(order._id)}
                                                    className="btn btn-success">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </table>
                    </div>
            }
        </Container >
    );
};

export default ManageAllOrders;