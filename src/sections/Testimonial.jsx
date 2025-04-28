import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import Slider from 'react-slick';

const Testimonial = () => {
    const quoteSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        // 👇 CUSTOM DOTS HERE
        appendDots: dots => (
            <div className="mt-6">
                <ul className="flex justify-center gap-2">{dots}</ul>
            </div>
        ),
        customPaging: i => (
            <div className="testimonial size-1.5 bg-gray-300 rounded-full hover:bg-blue-700 transition"></div>
        ),
    };
    return (
        <section className="bg-white py-16 relative overflow-hidden text-black">
            <div className="max-w-6xl mx-auto text-center px-6 relative z-[1]">
                {/* Title Section */}
                <p className="text-[#16377e] font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl mb-2">Testimonial</p>
                <h2 className="text-black text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6">What our customer <br className='hidden md:block' /> says about us</h2>

                {/* Quote */}
                <FaQuoteRight className="text-yellow-400 text-4xl mx-auto mb-4" />
                <Slider {...quoteSettings}>
                    <div>
                        <p className="text-lg font-bold text-gray-700 mb-4 max-w-xl mx-auto">
                            “The UI designs he crafted are top-notch, and the design system he integrated allows
                            for straightforward fixes and bulk updates throughout almost every area of the app.”
                        </p>
                        <p className="opacity-60 text-sm">- By Molie Rosa, Photographer</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-gray-700 mb-4 max-w-xl mx-auto">
                            “Amazing service! The team was super responsive and understood our needs perfectly.”
                        </p>
                        <p className="opacity-60 text-sm">- By Molie Rosa, Photographer2</p>
                    </div>
                    <div>
                        <p className="text-lg font-bold text-gray-700 mb-4 max-w-xl mx-auto">
                            “Highly recommend them! Their design sense and execution were top-notch.”
                        </p>
                        <p className="opacity-60 text-sm">- By Molie Rosa, Photographer3</p>
                    </div>
                </Slider>

                {/* Floating Avatars */}
                <div className="absolute -z-[1] top-10 left-10 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" alt="user1" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -z-[1] top-32 left-6 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="user2" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -z-[1] bottom-10 left-24 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="user3" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -z-[1] top-20 right-10 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="user4" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -z-[1] bottom-20 right-20 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg">
                    <img src="https://randomuser.me/api/portraits/men/51.jpg" alt="user5" className="w-full h-full object-cover" />
                </div>
            </div>

        </section>
    );
};

export default Testimonial;
