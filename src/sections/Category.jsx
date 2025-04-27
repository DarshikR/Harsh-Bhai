import React from 'react';
import { FaBowlFood, FaPersonHiking, FaTreeCity } from 'react-icons/fa6';
import { GiMountaintop, GiSailboat } from 'react-icons/gi';
import { TbBeach } from 'react-icons/tb';

const CategoryBrowsing = () => {
    const categories = [
        { name: 'City Tours', icon: FaTreeCity, Tours: '10 Tours+' },
        { name: 'Beaches', icon: TbBeach, Tours: '10 Tours+' },
        { name: 'Boat Tours', icon: GiSailboat, Tours: '10 Tours+' },
        { name: 'Adventure', icon: GiMountaintop, Tours: '10 Tours+' },
        { name: 'Food', icon: FaBowlFood, Tours: '10 Tours+' },
        { name: 'Hiking', icon: FaPersonHiking, Tours: '10 Tours+' },
    ];

    return (
        <section className="py-12 bg-[#f7f8fa] px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-lg text-center sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-bold font-kaushan text-[#16377e]">Browse By Category</h1>
                <h1 className="text-2xl text-center sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-black pb-10">Pick A Tour Type</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-lg shadow-2xl text-[#111111] transition-all cursor-pointer">
                            <div className="p-3 mb-2 bg-[#f8d448] rounded-full flex items-center justify-center text-2xl">
                                <category.icon className='' />
                            </div>
                            <p className="text-md font-extrabold">{category.name}</p>
                            <p className="text-md opacity-60">{category.Tours}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryBrowsing;

