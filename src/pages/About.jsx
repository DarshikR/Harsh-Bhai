import PageHeader from "../components/common/PageHeader";
import aboutBg from "../assets/about-breadcrumb-bg.png";
import { FaPlay } from 'react-icons/fa';
import img1 from '../assets/choos-us-thumb-1.png'; // background image
import img2 from '../assets/choos-us-thumb-2.png'; // foreground image

const About = () => {
    return (
        <>
            <WhtSelectUs />
        </>
    );
}

export default About;


export const WhtSelectUs = () => {
    return (
        <>
            <PageHeader title="About" breadcrumb="about" bgImage={aboutBg} />
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Image Collage */}
                    <div className="relative w-full h-[400px]">
                        {/* Rotated Image Behind */}
                        <img
                            src={img1}
                            alt="Scenery"
                            className="absolute top-0 left-0 w-64 h-80 object-cover rounded-lg transform -rotate-3 shadow-md"
                        />
                        {/* Foreground Image */}
                        <img
                            src={img2}
                            alt="Girl watching"
                            className="absolute top-10 left-20 w-64 h-80 object-cover rounded-lg z-10 shadow-lg"
                        />

                        {/* Watch Button */}
                        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-red-500 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">
                            <FaPlay className="text-sm" />
                            Watch Now
                        </button>
                    </div>

                    {/* Right Side - Text Content */}
                    <div>
                        <p className="text-red-500 italic mb-2">About us</p>
                        <h2 className="text-3xl font-bold text-blue-900 mb-4">
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