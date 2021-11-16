import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';
import './MyOrders.css';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();

    // For Delete Order
    const handleOrderDelete = id => {
        const confirm = window.confirm("Are you sure?");

        if (confirm) {
            setIsLoading(true);

            fetch(`https://pure-brushlands-94522.herokuapp.com/orders/${id}`, {
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

    // For Load Users Own Orders
    useEffect(() => {
        fetch(`https://pure-brushlands-94522.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data);
                setIsLoading(false);
            });
    }, [isLoading]);

    return (
        <Container className="my-orders my-5">
            {/* For Loading Spinner */}
            {isLoading ?
                <Loading></Loading>
                :
                <div className="table-container">
                    <table>
                        {/* Table Header */}
                        <tr>
                            <th>Name</th>
                            <th>Apartment Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        {/* Table Data */}
                        {
                            myOrders.map(order => {
                                return (
                                    <tr key={order._id}>
                                        <td>
                                            {order.name}
                                        </td>

                                        <td>
                                            {order.apartmentName}
                                        </td>

                                        <td>
                                            {order.price}
                                        </td>

                                        <td>
                                            {
                                                order.status === "Pending"
                                                    ?
                                                    <span className="fs-6 py-2">{order.status}</span>
                                                    :
                                                    <span className="fs-6 py-2">{order.status}</span>
                                            }
                                        </td>

                                        <td>
                                            <button
                                                onClick={() => handleOrderDelete(order._id)}
                                                className="btn btn-danger">
                                                <FontAwesomeIcon icon={faTrashAlt} />
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

export default MyOrders;