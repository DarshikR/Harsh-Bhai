import PageHeader from "../components/common/PageHeader";
import aboutBg from "../assets/about-breadcrumb-bg.png";
import { FaPlay } from 'react-icons/fa';
import img1 from '../assets/choos-us-thumb-1.png';
import img2 from '../assets/choos-us-thumb-2.png';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import icon4 from '../assets/icon-4.png';
import icon5 from '../assets/icon-5.png';
import icon6 from '../assets/icon-6.png';

const About = () => {
    return (
        <>
            <WhtSelectUs />
            <WhyChooseUs />
        </>
    );
}

export default About;


export const WhtSelectUs = () => {
    return (
        <>
            <PageHeader title="About" breadcrumb="about" bgImage={aboutBg} />
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap md:flex-row  items-center">

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
                <p className="text-red-500 italic text-lg mb-2">Features</p>
                <h2 className="text-3xl font-bold text-blue-900 mb-12">Why Choose Us</h2>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow p-6 text-left hover:shadow-lg transition"
                        >
                            <img src={item.icon} alt={item.title} className="w-10 h-10 mb-4" />
                            <h4 className="font-bold text-md text-blue-900 mb-2">{item.title}</h4>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
