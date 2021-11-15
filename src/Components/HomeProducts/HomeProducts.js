import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './HomeProducts.css';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://lit-tor-41260.herokuapp.com/apartments")
            .then(res => res.json())
            .then(data => {
                const reverseData = data.slice().reverse();
                setProducts(reverseData.slice(0, 6));
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            {/* Products Banner */}
            <div className="product-banner text-center">
                <h4 className="display-6 cursive-text product-title">
                    Luxury Apartments
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

            {/* Products List */}
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

export default HomeProducts;