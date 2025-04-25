// src/components/FeaturedToursSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaStar, FaHeart, FaRegClock } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tours = [
    {
        country: 'Budapest, Hungary',
        title: 'Wonders of the West Coast & Kimberley',
        image: 'https://i.ibb.co/K5K7tsB/tour1.jpg',
        price: '$520',
        days: '7days',
        rating: 4.8,
        reviews: 15,
    },
    {
        country: 'Greater London, UK',
        title: 'Windsor Castle, and Bath from London',
        image: 'https://i.ibb.co/X5KjKwZ/tour2.jpg',
        price: '$350',
        days: '7days',
        rating: 4.8,
        reviews: 15,
    },
    {
        country: 'Australia',
        title: 'Enchanting Great Barrier Reef, Aquatic Wonderland',
        image: 'https://i.ibb.co/fNKXbwW/tour3.jpg',
        price: '$450',
        days: '7days',
        rating: 4.8,
        reviews: 15,
    },
    {
        country: 'Oman',
        title: 'Ancient Heritage and Desert Adventures',
        image: 'https://i.ibb.co/nk3sZBw/tour4.jpg',
        price: '$599',
        days: '7days',
        rating: 4.8,
        reviews: 15,
    },
];

const FeaturedToursSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="bg-[#16377e] py-10 text-white">
            <div className="max-w-7xl mx-auto px-4">
                <p className="text-lg text-center sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-bold font-kaushan mb-1">Tours</p>
                <h2 className="text-2xl text-center sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">Featured Tours</h2>

                <Slider {...settings}>
                    {tours.map((tour, idx) => (
                        <div key={idx} className="px-2 h-full">
                            <div className="bg-white text-black overflow-hidden shadow-lg relative">
                                <img
                                    src={tour.image}
                                    alt={tour.title}
                                    className="h-48 w-full object-cover"
                                />
                                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                                    <FaHeart className="text-gray-500 hover:text-red-500" />
                                </button>
                                <div className="p-4 space-y-1">
                                    <p className="text-sm text-gray-500">{tour.country}</p>
                                    <h3 className="font-semibold">{tour.title}</h3>
                                    <div className="flex items-center gap-2 text-sm mt-2">
                                        <span className="flex items-center text-yellow-500">
                                            <FaStar className="mr-1" />
                                            {tour.rating}
                                        </span>
                                        <span className="text-gray-500">{tour.reviews} reviews</span>
                                        <span className="flex items-center text-gray-500 ml-auto">
                                            <FaRegClock className="ml-2 mr-1" />
                                            {tour.days}
                                        </span>
                                    </div>
                                    <hr className='my-2' />
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500">Starting From</div>
                                        <div className="font-bold text-lg text-right font-kaushan">{tour.price}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default FeaturedToursSlider;