import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Loading from '../Loading/Loading';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch("https://lit-tor-41260.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => {
                const reverseData = data.slice().reverse();
                setReviews(reverseData);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="mb-4">
            {/* Reviews Banner */}
            <div className="reviews-banner text-center">
                <h4 className="display-6 cursive-text reviews-title">
                    Reviews
                </h4>
                <div>
                    <div>
                        <small className="text-muted small-text">
                            See what our client's say about our luxury apartments and service so that you can know about
                        </small>
                    </div>

                    <div>
                        <small className="text-muted small-text">
                            our real service and our apartments.
                        </small>
                    </div>
                </div>
            </div>

            {/* Reviews List */}
            <Container>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {/* For Loading Screen */}
                    {isLoading ? <Loading></Loading> : null}

                    {reviews.map(review => <Review key={review._id} review={review} />)}
                </div>
            </Container>
        </div>
    );
};

export default Reviews;