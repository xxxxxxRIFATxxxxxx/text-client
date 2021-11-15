import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Product from '../Product/Product';
import './HomeProducts.css';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://pure-brushlands-94522.herokuapp.com/apartments")
            .then(res => res.json())
            .then(data => {
                const reverseData = data.slice().reverse();
                setProducts(reverseData.slice(0, 6));
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            <div className="product-banner text-center">
                <h4 className="display-6 product-title">
                    Our Houses
                </h4>
            </div>

            {/* Products List */}
            <Container>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {isLoading ? <Loading></Loading> : null}

                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </Container>
        </div>
    );
};

export default HomeProducts;