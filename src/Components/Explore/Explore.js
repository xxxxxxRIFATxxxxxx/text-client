import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './Explore.css';

const Explore = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://pure-brushlands-94522.herokuapp.com/apartments")
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice().reverse());
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            <div className="mb-4 text-center bg-light service-banner pt-4">
                <h4 className="display-6 service-title">
                    Our Apartments
                </h4>
            </div>

            {/* Apartments */}
            <Container>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {isLoading ? <Loading></Loading> : null}

                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </Container>
        </div>
    );
};

export default Explore;