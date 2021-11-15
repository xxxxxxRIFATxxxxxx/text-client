import React from 'react';
import gif from './working.gif';
import { Container } from 'react-bootstrap';

const Payment = () => {
    return (
        <Container className="my-5">
            <div className="row row-cols-1 row-cols-md-2 g-0">
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h2 className="display-5 text-center text-info fw-bold">
                        Payment System Coming Soon
                    </h2>

                    <small>
                        Keep an eye on our website for further updates
                    </small>

                </div>

                <div className="col">
                    <img src={gif} alt="working man" className="img-fluid" />
                </div>
            </div>
        </Container>
    );
};

export default Payment;