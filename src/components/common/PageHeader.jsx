import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, breadcrumb, bgImage }) => {
    return (
        <section
            className="w-full bg-cover bg-center bg-no-repeat relative py-24"
            style={{ backgroundImage: `linear-gradient(rgba(5, 16, 54, 0.7), rgba(5, 16, 54, 0.7)), url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative text-center text-white z-10">
                <h1 className="text-4xl font-bold mb-2">{title}</h1>
                <p className="text-lg">
                    <Link to='/' className="text-gray-300">Home</Link> / <Link to={`/` + breadcrumb} className="text-red-400 capitalize">{breadcrumb}</Link>
                </p>
            </div>
        </section>
    );
};

export default PageHeader;
