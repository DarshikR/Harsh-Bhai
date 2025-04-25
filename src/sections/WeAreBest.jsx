import React from 'react';

const WeAreBest = () => {
    return (
        <section className="bg-[#f7f8fa] py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-12">

                {/* Left Content */}
                <div className="flex-1">
                    <p className="text-[#16377e] text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-bold font-kaushan mb-2">Why We Are Best</p>
                    <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6 text-black">Keep Things <br className='hidden md:block' /> Flexible</h2>
                    <button className="btn btn-outline btn-primary mb-8">Contact Us</button>

                    <div className="grid grid-cols-2 gap-6 text-black">
                        <div>
                            <h3 className="text-3xl font-bold font-kaushan mb-3 beforeelement">120+</h3>
                            <p className="opacity-60 text-sm">Total Destination</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold font-kaushan mb-3 beforeelement">12k+</h3>
                            <p className="opacity-60 text-sm">Total Travelers</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold font-kaushan mb-3 beforeelement">500+</h3>
                            <p className="opacity-60 text-sm">Travel Packages</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold font-kaushan mb-3 beforeelement">7k+</h3>
                            <p className="opacity-60 text-sm">Positive Reviews</p>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-wrap gap-4 justify-center">
                    <div className="flex flex-col gap-4">
                        <img
                            src="https://i.ibb.co/zJN60tR/map.jpg"
                            alt="Map travelers"
                            className="w-60 h-40 object-cover rounded-lg shadow"
                        />
                        <img
                            src="https://i.ibb.co/BqPL3hz/campervan.jpg"
                            alt="Van travel"
                            className="w-60 h-32 object-cover rounded-lg shadow"
                        />
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/6W2Lmjn/hiking.jpg"
                            alt="Hiking mountain"
                            className="w-72 h-[300px] object-cover rounded-lg shadow"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WeAreBest;