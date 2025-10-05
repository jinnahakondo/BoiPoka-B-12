import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Header/Navbar';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 font-sans'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;