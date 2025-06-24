import PageHeader from "../components/common/PageHeader";
import aboutBg from "../assets/about-breadcrumb-bg.png";
import { FaPlay, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import img1 from '../assets/choos-us-thumb-1.png';
import img2 from '../assets/choos-us-thumb-2.png';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import icon4 from '../assets/icon-4.png';
import icon5 from '../assets/icon-5.png';
import icon6 from '../assets/icon-6.png';
import team1 from '../assets/team-thumb-1.png';
import team2 from '../assets/team-thumb-2.png';
import team3 from '../assets/team-thumb-3.png';
import team4 from '../assets/team-thumb-4.png';
import team5 from '../assets/team-thumb-5.png';
import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import { useState } from "react";
import TestimonialThumb1 from '../assets/testimonial-thumb-1.png';
import TestimonialThumb2 from '../assets/testimonial-thumb-2.png';
import TestimonialThumb3 from '../assets/testimonial-thumb-3.png';

const About = () => {
    return (
        <>
            <WhtSelectUs />
            <WhyChooseUs />
            <TeamSection />
            <TestimonialSection />
        </>
    );
}

export default About;


export const WhtSelectUs = () => {
    return (
        <>
            <PageHeader title="About" breadcrumb="about" bgImage={aboutBg} />
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap md:flex-row items-center">

                    {/* Left Side - Image Collage */}
                    <div className="relative flex justify-center w-full lg:w-1/2 h-[400px] mx-auto">
                        {/* Rotated Image Behind */}
                        <img
                            src={img1}
                            alt="Scenery"
                            className="w-64 h-80 object-cover transform -rotate-3 shadow-md hidden sm:block"
                        />
                        {/* Foreground Image */}
                        <img
                            src={img2}
                            alt="Girl watching"
                            className="w-64 h-80 object-cover z-1 bg-white p-1"
                        />

                        {/* Watch Button */}
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer bg-red-500 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                            <FaPlay className="text-sm" />
                            Watch Now
                        </button>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="w-full lg:w-1/2">
                        <p className="text-red-500 font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl mb-2">About us</p>
                        <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-900 mb-4">
                            Why Select Us for Your Vaction
                        </h2>
                        <p className="text-gray-600 mb-4">
                            Intrinsically myocardinate standards compliant solutions rather than multidisciplinary solutions.
                            Phosfluorescently re-engineer goal-oriented resources whereas distributed strategic theme areas.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Authoritatively coordinate 24/365 process improvements after out-of-the-box mindshare. Appropriately extend user-centric partnerships before interactive e-tailers.
                        </p>
                        <p className="text-gray-600">
                            Dynamically whiteboard team building processes rather than long-term high-impact infrastructures.
                        </p>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-2 sm:grid-cols-4 text-center gap-6">
                    {[
                        { label: 'Total Destination', value: '120+' },
                        { label: 'Travel Packages', value: '500+' },
                        { label: 'Total Travelers', value: '12k+' },
                        { label: 'Positive Reviews', value: '7k+' },
                    ].map((stat, idx) => (
                        <div key={idx}>
                            <h3 className="text-3xl font-bold text-gray-900 font-kaushan">{stat.value}</h3>
                            <p className="text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

const features = [
    {
        icon: icon1,
        title: 'Cheap Rates',
        desc: 'Credibly target visionary portals rather than prospective human capital.',
    },
    {
        icon: icon2,
        title: 'Best Travel Plan',
        desc: 'Credibly target visionary portals rather than prospective human capital.',
    },
    {
        icon: icon3,
        title: 'Easy & Quick Booking',
        desc: 'Credibly target visionary portals rather than prospective human capital.',
    },
    {
        icon: icon4,
        title: 'Hand-picked Tour',
        desc: 'Credibly target visionary portals rather than prospective human capital.',
    },
    {
        icon: icon5,
        title: 'Private Guide',
        desc: 'Credibly target visionary portals rather than prospective human capital.',
    },
    {
        icon: icon6,
        title: 'Customer Care 24/7',
        desc: 'Credibly target visionary portals rather than prospective human capital.',
    },
];
export const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-[#f8f9fb]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Section Header */}
                <p className="text-red-500 font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl mb-2">Features</p>
                <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-900 mb-12">Why Choose Us</h2>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow p-6 text-left hover:shadow-lg transition"
                        >
                            <div className="beforeelement2">
                                <img src={item.icon} alt={item.title} className="w-10 h-10 mb-4" />
                            </div>
                            <h4 className="font-bold text-md text-blue-900 mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const team = [
    {
        name: 'Antoni Shkraba',
        role: 'Founder & Director',
        image: team1,
        socials: true,
    },
    {
        name: 'Andrew Davie',
        role: 'Chief Operating Officer',
        image: team2,
        socials: true,
    },
    {
        name: 'Orlando Diggs',
        role: 'Director - Hotels',
        image: team3,
        socials: true,
    },
    {
        name: 'Philip Martin',
        role: 'Chief Executive',
        image: team4,
        socials: true,
    },
    {
        name: 'Tamara Bellis',
        role: 'Customer Support',
        image: team5,
        socials: true,
    },
];
const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
export const TeamSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-red-500 font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl mb-2">Team</p>
                <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-900 mb-12">Our Amazing Team</h2>

                <Slider {...settings}>
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative rounded-md overflow-hidden px-3">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-[280px] object-cover"
                            />

                            {/* Social Icons on Hover */}
                            {member.socials && (
                                <div className="mx-3 absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 text-white text-lg">
                                    <FaFacebookF className="hover:text-red-400 cursor-pointer" />
                                    <FaTwitter className="hover:text-red-400 cursor-pointer" />
                                    <FaLinkedinIn className="hover:text-red-400 cursor-pointer" />
                                </div>
                            )}

                            <div className="mt-3">
                                <h4 className="font-bold text-blue-900 text-sm">{member.name}</h4>
                                <p className="text-gray-500 text-xs">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

const testimonials = [
    {
        text: "The UI designs he crafted are top-notch, and the design system he integrated allows for straightforward fixes and bulk updates throughout almost every area of the app.",
        author: "Molie Rosa",
        role: "Photographer"
    },
    {
        text: "Working with this team was smooth and efficient. Highly recommend for creative front-end design.",
        author: "Daniel Smith",
        role: "Travel Blogger"
    },
    {
        text: "They delivered the design way faster than expected with amazing quality. The attention to detail was impressive.",
        author: "Anna Wells",
        role: "Explorer"
    },
];

export const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);

    return (
        <section className="py-20 bg-[#f9fafb]">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left - Image Collage */}
                <div className="flex flex-col items-center relative space-y-4">
                    <img
                        src={TestimonialThumb1}
                        alt="Traveler 1"
                        className="w-40 h-28 object-cover shadow-md rotate-3"
                    />
                    <img
                        src={TestimonialThumb2}
                        alt="Traveler 2"
                        className="w-52 h-36 object-cover shadow-md -rotate-2 ml-6"
                    />
                    <img
                        src={TestimonialThumb3}
                        alt="Traveler 3"
                        className="w-44 h-32 object-cover shadow-md rotate-2 -ml-4"
                    />
                </div>

                {/* Right - Testimonial Text */}
                <div className="text-center">
                    <p className="text-red-500 font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl mb-2">Testimonials</p>
                    <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-blue-900 mb-12">What Travelers Say</h2>
                    <FaQuoteRight className="text-red-500 text-3xl mx-auto mb-4" />

                    <p className="text-md text-gray-800 font-semibold mb-4 max-w-xl mx-auto leading-relaxed">
                        “{testimonials[current].text}”
                    </p>
                    <p className="text-gray-500 text-sm">
                        — {testimonials[current].author}, {testimonials[current].role}
                    </p>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full ${current === index ? 'bg-red-500' : 'bg-gray-300'
                                    } transition cursor-pointer`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
