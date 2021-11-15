import React from 'react';
import { Container } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <Container className="my-4">
            <div className="mb-4 text-center bg-light service-banner">
                <h4 className="display-6 cursive-text service-title">
                    About
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            apartment is not your average apartments. For over ten years we have been creating
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            fancy-made apartments. We have thousands of happy clients
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            all around the world.
                        </small>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-2">
                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Who We Are</h4>
                        <p className="text-muted small-text">
                            Every apartments we create is unique and
                            tailored just for you. Tell us what types of apartments you
                            want. We hand-select the best apartments for you. We work with regularly. Our quality is our priority.
                        </p>
                    </div>
                </div>

                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/pK0qg6Q/naomi-ellsworth-EMPLSuv-Duh-Q-unsplash.jpg" alt="apartments" />
                </div>


                <div className="col">
                    <img className="img-fluid" src="https://i.ibb.co/FBqZjhK/fernando-alvarez-rodriguez-M7-Gdd-Pq-Jowg-unsplash.jpg" alt="apartments" />
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <div className="w-75 banner-text-container">
                        <h4 className="display-6 cursive-text">Why You Trust Us</h4>
                        <p className="text-muted small-text">
                            Our philosophy is simple: wanderlust.
                            It reflects in our selection of exquisite
                            apartments. We hand-select the best apartments for you. We work with regularly. Our quality is our priority.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;