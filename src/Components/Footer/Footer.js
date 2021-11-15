import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer text-center text-lg-start text-white bg-dark">
            <section className="py-3">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        {/* About */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">
                                apartment
                            </h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />
                            <p className="small-text footer-about">
                                This is a apartment web application. Here you can booked or purchase different types apartments and house and track your orders. You can also post a apartments.
                            </p>
                        </div>

                        {/* Service */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold ">Explore</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />


                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none small-text">
                                    Flat
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none small-text">
                                    House
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none small-text">
                                    Cottage
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none small-text">
                                    Apartment
                                </NavLink>
                            </p>
                        </div>

                        {/* Useful links */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold">Useful links</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p>
                                <NavLink to="/" className="text-white text-decoration-none small-text">Home</NavLink>
                            </p>

                            <p>
                                <NavLink to="/explore" className="text-white text-decoration-none small-text">
                                    Explore
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/about" className="text-white text-decoration-none small-text">
                                    About
                                </NavLink>
                            </p>

                            <p>
                                <NavLink to="/reviews" className="text-white text-decoration-none small-text">
                                    Reviews
                                </NavLink>
                            </p>
                        </div>

                        {/* Contact */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold ">Contact</h6>
                            <hr
                                className="mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: "60px", backgroundColor: "#0DCAF0", height: "2px" }}
                            />

                            <p className="small-text">
                                <i className="fas fa-home me-3"></i>
                                Dhaka, Gulshan 1212, Bangladesh
                            </p>

                            <p className="small-text">
                                <i className="fas fa-envelope me-3"></i>
                                info@luxurysuite.com
                            </p>

                            <p className="small-text">
                                <i className="fas fa-phone me-3"></i>
                                +880 199 999 888
                            </p>

                            <p className="small-text">
                                <i className="fas fa-print me-3"></i>
                                +880 199 999 888
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Copyright */}
            <div
                className="text-center p-3 small-text"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                <span className="me-2">© 2021 Copyright</span>

                <NavLink to="/" className="text-white text-decoration-none">
                    MD. RIFAT ISLAM
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;