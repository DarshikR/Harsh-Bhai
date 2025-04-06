import React from 'react'
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        <Footer />
        </>
    )
}

export default AppLayout;