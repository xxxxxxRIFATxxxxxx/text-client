import React from 'react';
import './Slider.css';

const Slider = () => {
    return (
        <div className="container py-5">
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <h1 className="display-4 pb-3">
                        Apartment Complexes
                    </h1>

                    <p className="text-muted">
                        An apartment, or flat, is a self-contained housing unit that occupies part of a building, generally on a single story. There are many names for these overall buildings, see below. The term "apartment" can be generically applied to any residential unit inside a building. The building can be a house, townhouse, large residential building, and even condominium high-rise where owners sublet their units. Generally, what sets apartments apart from the rest is that they are rented units and not owned.
                    </p>
                </div>

                <div className="col">
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt="apartment"
                    />
                </div>
            </div>
        </div>
    );
};

export default Slider;