import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://pure-brushlands-94522.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                const reverseData = data.slice().reverse();
                setReviews(reverseData);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            <div className="reviews-banner text-center">
                <h4 className="display-6 reviews-title">
                    Our Reviews
                </h4>
            </div>

            {/* Reviews */}
            <Container>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {isLoading ? <Loading></Loading> : null}

                    {reviews.map(review => <Review key={review._id} review={review} />)}
                </div>
            </Container>
        </div>
    );
};

export default Reviews;