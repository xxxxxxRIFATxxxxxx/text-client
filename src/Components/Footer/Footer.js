import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start text-white bg-dark">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold ">Explore</h6>
                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Apartment
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Home
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    House
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Apartment
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>


                            <p>
                                <NavLink to="/" className="text-white text-decoration-none  ">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Explore
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none  ">
                                    About
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/reviews" className="text-white text-decoration-none  ">
                                    Reviews
                                </NavLink>
                            </p>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold ">Explore</h6>
                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Apartment
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Home
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    House
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Apartment
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>


                            <p>
                                <NavLink to="/" className="text-white text-decoration-none  ">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none  ">
                                    Explore
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none  ">
                                    About
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/reviews" className="text-white text-decoration-none  ">
                                    Reviews
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <span className="me-2">© 2021 Copyright</span>
            </div>
        </footer>
    );
};

export default Footer;