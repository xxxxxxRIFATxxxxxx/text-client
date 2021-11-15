import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://lit-tor-41260.herokuapp.com/apartments")
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice().reverse());
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            <div className="mb-4 text-center bg-light service-banner pt-4">
                <h4 className="display-6 cursive-text service-title">
                    Explore Our Apartments
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            Book a luxury apartments at a great price! Grab a last-minute offer and start
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            moving to a new home.
                        </small>
                    </div>
                </div>
            </div>

            {/* Apartments List */}
            <Container>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {/* For Loading Screen */}
                    {isLoading ? <Loading></Loading> : null}

                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </Container>
        </div>
    );
};

export default Explore;