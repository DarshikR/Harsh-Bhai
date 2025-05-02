import React from 'react';
import Update1 from '../assets/update1.png';
import Photo from '../assets/update1.png'
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const posts = [
    {
        title: "The Impact of Covid-19 on travel & tourism industry",
        date: "July 13, 2023",
        admin: "Admin",
        image: Update1,
    },
    {
        title: "The Impact of Covid-19 on travel & tourism industry",
        date: "July 13, 2023",
        admin: "Admin",
        image: Update1,
    },
    {
        title: "The Impact of Covid-19 on travel & tourism industry",
        date: "July 13, 2023",
        admin: "Admin",
        image: Update1,
    },
    {
        title: "The Impact of Covid-19 on travel & tourism industry",
        date: "July 13, 2023",
        admin: "Admin",
        image: Update1,
    },
];

const LatestTravelGuide = () => {
    return (
        <section className="py-20 bg-white text-black">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-[#16377e] font-kaushan text-lg sm:text-xl md:text-xl xl:text-2xl 2xl:text-3xl mb-2 text-center">Update</p>
                <h2 className="text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-10">Latest Travel Guide</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                            <img src={post.image} alt="post" className="w-32 h-24 object-cover" />
                            <div>
                                <p className="opacity-60 text-xs mb-1">{post.date} · {post.admin}</p>
                                <h3 className="font-bold text-md">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className='my-10' />

                <div className="flex flex-row gap-4">
                    <Link
                        to='https://www.instagram.com/servicesdira?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
                        className='verticale-text flex items-center gap-1'
                        target='_blank'
                    >
                        <AiFillInstagram />
                        @diraservice
                    </Link>
                    <div className="flex flex-1 justify-between gap-4 overflow-x-auto">
                        <img src={Photo} alt="insta 1" className="h-36 aspect-square object-cover" />
                        <img src={Photo} alt="insta 2" className="h-36 aspect-square object-cover" />
                        <img src={Photo} alt="insta 3" className="h-36 aspect-square object-cover" />
                        <img src={Photo} alt="insta 4" className="h-36 aspect-square object-cover" />
                        <img src={Photo} alt="insta 5" className="h-36 aspect-square object-cover" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LatestTravelGuide;