import React from 'react';
import Partner1 from '../assets/summer.jpg';
import Partner2 from "../assets/timetotravel.jpg";
import Partner3 from '../assets/mountains.jpg';
import Partner4 from "../assets/sayhellotosummer.jpg";
import Partner5 from "../assets/let'sgethigh.jpg";

const Partners = () => {
    return (
        <section className="bg-[#002f6c] py-10">
            <div className="max-w-7xl mx-auto text-center px-6">
                <p className="text-yellow-400 font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl mb-6">Our trusted partners</p>
                <div className="flex flex-wrap justify-between items-center gap-10">
                    <img src={Partner1} alt="partner 1" className="h-22 aspect-square mix-blend-lighten grayscale-100 invert-100" />
                    <img src={Partner2} alt="partner 1" className="h-22 aspect-square mix-blend-lighten grayscale-100 invert-100" />
                    <img src={Partner3} alt="partner 1" className="h-22 aspect-square mix-blend-lighten grayscale-100 invert-100" />
                    <img src={Partner4} alt="partner 1" className="h-22 aspect-square mix-blend-lighten grayscale-100 invert-100" />
                    <img src={Partner5} alt="partner 1" className="h-22 aspect-square mix-blend-lighten grayscale-100 invert-100" />
                </div>
            </div>
        </section>
    );
};

export default Partners;