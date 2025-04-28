import React from 'react';
import { MdOutlinePlayCircle } from 'react-icons/md';
import Ropeway from '../assets/ropeway.jpg';

const ReadyToTravel = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat backdrop-grayscale-25"
            style={{ backgroundImage: `url(${Ropeway})` }}
        >
            <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div> {/* Dark overlay */}

            <div
                className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Side Content */}
                <div className="text-white max-w-xl space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                    {/* <button className="text-yellow-400 text-6xl rounded-full"> */}
                    <MdOutlinePlayCircle className='text-yellow-400 text-6xl' />
                    {/* </button> */}
                    <h3 className="text-yellow-400 font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl">Are you ready to travel?</h3>
                    <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-snug">
                        Tevily is a World Leading <br className='hidden md:block' /> Online Tour Booking <br className='hidden md:block' /> Platform
                    </h2>
                    <button className="btn btn-outline btn-light">
                        Contact Us
                    </button>
                </div>

                {/* Right Side Cards */}
                <div className="grid grid-cols-2 gap-6">
                    {[
                        { label: 'Wildlife Tours', icon: '🌲' },
                        { label: 'Paragliding Tours', icon: '🪂' },
                        { label: 'Adventure Tours', icon: '⛰️' },
                        { label: 'Beaches Tours', icon: '🏖️' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white text-center shadow p-6 hover:scale-105 transition">
                            <div
                                className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-blue-900 font-semibold">{item.label}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ReadyToTravel;