import React from 'react'
import HeroSection from '../sections/HeroSection';
import CategoryBrowsing from '../sections/Category';
import WhyChooseUs from '../sections/WhyChooseUs';
import TopDestinations from '../sections/TopDestinations';
import FeaturedToursSlider from '../sections/FeaturedToursSlider';
import WeAreBest from '../sections/WeAreBest';
import Testimonial from '../sections/Testimonial';

const Home = () => {
    return (
        <>
            <HeroSection />
            <CategoryBrowsing />
            <WhyChooseUs />
            <TopDestinations />
            <FeaturedToursSlider />
            <WeAreBest />
            <Testimonial />
        </>
    )
}

export default Home;