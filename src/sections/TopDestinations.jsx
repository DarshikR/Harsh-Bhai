import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const destinations = [
    {
        title: 'United Kingdom',
        image: 'https://i.ibb.co/J5wGZ8H/london.jpg',
        travelers: '174,688',
    },
    {
        title: 'Turkey',
        image: 'https://i.ibb.co/7r8wXht/istanbul.jpg',
        travelers: '174,688',
    },
    {
        title: 'Thailand',
        image: 'https://i.ibb.co/NKqG1Sv/thailand.jpg',
        travelers: '174,688',
    },
    {
        title: 'France',
        image: 'https://i.ibb.co/6Z6MhZq/paris.jpg',
        travelers: '174,688',
    },
];

const TopDestinations = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className='bg-white'>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <p className="text-[#16377e] font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-bold">Destination</p>
                        <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black">Top Destinations</h2>
                    </div>
                    <a className="text-blue-900 font-semibold hover:underline flex items-center gap-1">
                        See All →
                    </a>
                </div>
                <Slider {...settings}>
                    {destinations.map((item, idx) => (
                        <div key={idx} className={`px-5 ${idx % 2 !== 0 ? 'mt-8' : 'mb-8'}`}>
                            <div className="card w-full bg-base-100 rounded-none overflow-hidden">
                                <figure className="h-56 overflow-hidden">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                </figure>
                                <div className="text-black bg-white p-4">
                                    <h3 className="font-bold text-lg ">{item.title}</h3>
                                    <p className="text-sm opacity-60">{item.travelers} Travelers</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TopDestinations;
