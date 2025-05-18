import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='container mx-auto'>
            <header className='py-8'>
                <Navbar />
            </header>
            <main>

            <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;