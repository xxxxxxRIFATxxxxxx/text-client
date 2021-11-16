import React from 'react';
import './Contact.css';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container className="my-4 booking">
            <div className="product-banner text-center">
                <h4 className="display-6 product-title">
                    About US
                </h4>
            </div>

            <div>
                <div className="row">
                    {/* Contact Text*/}
                    <div className="col col-12 col-sm-12 col-md-12 text-center">
                        We are often the go-to for a new visitor on a mission. It's where they go when they have a question and truly want to speak to an individual at your organization. They exist to serve the user with the purpose of providing them with information on how they can get in touch with you. How do you say contact us for more information?
                        If I can be of assistance, please do not hesitate to contact me. If you require any further information, feel free to contact me. If you require any further information, let me know. Please feel free to contact me if you need any further information.
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;