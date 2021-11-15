import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
    return (
        <Carousel fade className="slider mb-4">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/4PQ5tR7/2.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your apartment</h3>
                    <div className="pb-3">
                        <div className="hide-slider">
                            <small className="slider-more-small-text">
                                With luxury, your new apartments starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide-slider">
                            <small className="slider-more-small-text">
                                sure to explore our apartments
                            </small>
                        </div>

                        <NavLink to="/explore" className="btn btn-info text-white mt-3 px-4 hide-slider">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/RT8wv0p/5.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your apartment</h3>
                    <div className="pb-3">
                        <div className="hide-slider">
                            <small className="slider-more-small-text">
                                With luxury, your new apartments starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide-slider">
                            <small className="slider-more-small-text">
                                sure to explore our apartments
                            </small>
                        </div>

                        <NavLink to="/explore" className="btn btn-info text-white mt-3 px-4 hide-slider">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/TqWRsgJ/1.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your apartment</h3>
                    <div className="pb-3">
                        <div className="hide-slider">
                            <small className="slider-more-small-text">
                                With luxury, your new apartments starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide-slider">
                            <small className="slider-more-small-text">
                                sure to explore our apartments
                            </small>
                        </div>

                        <NavLink to="/explore" className="btn btn-info text-white mt-3 px-4 hide-slider">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/3Yrf20x/3.jpg"
                    alt="Slide"
                />

                <Carousel.Caption>
                    <h3 className="display-5 cursive-text slider-title">Your apartment</h3>
                    <div className="pb-3">
                        <div className="hide-slider">
                            <small className="slider-more-small-text">
                                With luxury, your new apartments starts here. Please be
                            </small>
                        </div>

                        <div className="slider-text-container hide-slider">
                            <small className="slider-more-small-text">
                                sure to explore our apartments
                            </small>
                        </div>

                        <NavLink to="/explore" className="btn btn-info text-white mt-3 px-4 hide-slider">Service</NavLink>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;