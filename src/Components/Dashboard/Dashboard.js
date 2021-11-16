import React from 'react';
import './Dashboard.css';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import Payment from '../Payment/Payment';
import useAuth from '../../Hooks/useAuth';
import DashboardContent from '../DashboardContent/DashboardContent';
import AdminRoute from '../AdminRoute/AdminRoute';
import MyOrders from '../MyOrders/MyOrders';
import DashboardReview from '../DashboardReview/DashboardReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { logout, isAdmin } = useAuth();
    const history = useHistory();

    return (
        <div className="dashboard">
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
                {/* <!-- Side Bar --> */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-3">
                    <div className="card h-100 bg-transparent border-0">
                        <div className="mt-5">
                            <ul className="nav flex-column">
                                {/* <!-- Dashboard --> */}
                                {
                                    isAdmin ?
                                        // For Admin
                                        <>
                                            {/* Overview */}
                                            <li className="nav-item p-1 side-item-active mb-3 bg-danger">
                                                <NavLink to={url}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-chart-pie text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">Overview</span>
                                                </NavLink>
                                            </li>

                                            {/* Manage All Orders */}
                                            <li className="nav-item p-1 side-item-active mb-3 bg-danger">
                                                <NavLink to={`${url}/manageAllOrders`}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-tasks text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">Manage All Orders</span>
                                                </NavLink>
                                            </li>

                                            {/* Add Product */}
                                            <li className="nav-item p-1 side-item-active mb-3 bg-danger">
                                                <NavLink to={`${url}/addProduct`}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-plus text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">Add Product</span>
                                                </NavLink>
                                            </li>

                                            {/* Make Admin */}
                                            <li className="nav-item p-1 side-item-active mb-3 bg-danger">
                                                <NavLink to={`${url}/makeAdmin`}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-users-cog text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">Make Admin</span>
                                                </NavLink>
                                            </li>

                                            {/* Manage Products */}
                                            <li className="nav-item p-1 side-item-active mb-3 bg-danger">
                                                <NavLink to={`${url}/manageProducts`}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-server text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">Manage Products</span>
                                                </NavLink>
                                            </li>
                                        </>
                                        :

                                        // For Normal User
                                        <>
                                            {/* <!-- My Orders --> */}
                                            <li className="nav-item p-1 mb-3 side-item-active bg-danger">
                                                <NavLink to={url}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-shopping-cart text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">My Orders</span>
                                                </NavLink>
                                            </li>

                                            {/* <!-- Payment --> */}
                                            <li className="nav-item p-1 mb-3 side-item-active bg-danger">
                                                <NavLink to={`${url}/payment`}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-money-bill-wave text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">Payment</span>
                                                </NavLink>
                                            </li>

                                            {/* <!-- Review --> */}
                                            <li className="nav-item p-1 mb-3 side-item-active bg-danger">
                                                <NavLink to={`${url}/dashboardReview`}
                                                    className="nav-link d-flex justify-content-start align-items-center side-bar-icon">

                                                    <i className="fas fa-user-edit text-white fs-5 side-icon me-4"></i>
                                                    <span className="fw-bold">Review</span>
                                                </NavLink>
                                            </li>
                                        </>
                                }

                                {/* <!-- Logout --> */}
                                <button
                                    onClick={() => logout(history)}
                                    className="btn btn-danger text-white d-flex justify-content-center align-items-center logout-btn mt-4">
                                    <i className="fas fa-sign-out-alt fs-5 me-2"></i>
                                    <span>Logout</span>
                                </button>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <!-- Content --> */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-9">
                    <div className="card h-100 bg-transparent border-0">
                        <Switch>
                            {/* For Admin User */}
                            {isAdmin
                                ?
                                <>
                                    <AdminRoute exact path={path} >
                                        <DashboardContent />
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/manageAllOrders`} >
                                        <ManageAllOrders />
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/addProduct`} >
                                        <AddProduct />
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/makeAdmin`} >
                                        <MakeAdmin />
                                    </AdminRoute>

                                    <AdminRoute exact path={`${path}/manageProducts`} >
                                        <ManageProducts />
                                    </AdminRoute>
                                </>
                                :

                                <>
                                    <Route exact path={`${path}/payment`}>
                                        <Payment />
                                    </Route>

                                    <Route exact path={path}>
                                        <MyOrders />
                                    </Route>

                                    <Route exact path={`${path}/dashboardReview`}>
                                        <DashboardReview />
                                    </Route>
                                </>
                            }
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;