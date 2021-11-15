import React from 'react';
import HomeProducts from '../HomeProducts/HomeProducts';
import Reviews from '../Reviews/Reviews';
import Slider from '../Slider/Slider';
import Contact from '../Contact/Contact';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider />
            <HomeProducts />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;