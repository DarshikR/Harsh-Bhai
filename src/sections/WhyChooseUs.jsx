import React from 'react'
import Trip from '../assets/WhyChooseUs.png';

const WhyChooseUs = () => {
    return (
        <>
            <div className="hero bg-[#f7f8fa] min-h-[calc(100dvh-80px)] text-black">
                <div className="w-full flex flex-col">
                    <div className='hero-content w-full justify-evenly flex-col md:flex-row mx-auto'>
                        <div className='flex flex-col justify-center w-fit bg-[#16377e]'>
                            <div className='bg-[#f8d448] ml-12'>
                                <img
                                    src={Trip}
                                    className="object-cover h-50 sm:h-88 -ml-5 -mt-10 md:-ml-10 md:-mt-20"
                                    alt='trip' />
                            </div>
                            <p className='text-white py-4 ml-6 sm:ml-12 md:ml-14 sm:text-xl md:text-2xl'><span className='font-kaushan'>10+</span> Years of Experience</p>
                        </div>
                        <div className='flex flex-col justify-center items-center md:items-start'>
                            <h1 className="text-lg text-center md:text-left md:text-xl xl:text-2xl 2xl:text-3xl font-bold font-kaushan text-[#16377e]">Why Choose Us</h1>
                            <h1 className="text-lg text-center md:text-left sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-bold">Plan Your Trip <br className='hidden md:block' /> with Trisog</h1>
                            <p className="py-6 text-center md:text-left opacity-60">
                                Holisticly optimize proactive strategic theme <br />
                                areas rether than effective manufectured <br />
                                products create.
                            </p>
                            <div className='flex flex-wrap mb-5 pointer-events-none'>
                                <label className="label text-[#16377e] font-semibold w-1/2 justify-center md:justify-normal">
                                    <input type="checkbox" defaultChecked className="checkbox before:bg-[#16377e] border-none shadow-none checked:shadow-none pointer-events-none" />
                                    Travel Plan
                                </label>
                                <label className="label text-[#16377e] font-semibold w-1/2 justify-center md:justify-normal">
                                    <input type="checkbox" defaultChecked className="checkbox before:bg-[#16377e] border-none shadow-none checked:shadow-none pointer-events-none" />
                                    Cheap Rates
                                </label>
                                <label className="label text-[#16377e] font-semibold w-1/2 justify-center md:justify-normal mt-3">
                                    <input type="checkbox" defaultChecked className="checkbox before:bg-[#16377e] border-none shadow-none checked:shadow-none pointer-events-none" />
                                    Hand-picked Tour
                                </label>
                                <label className="label text-[#16377e] font-semibold w-1/2 justify-center md:justify-normal mt-3">
                                    <input type="checkbox" defaultChecked className="checkbox before:bg-[#16377e] border-none shadow-none checked:shadow-none pointer-events-none" />
                                    Privete Guide
                                </label>
                            </div>
                            <button className="btn btn-primary btn-outline">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs