import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={logo} alt="" />
            <h5 className='text-lg text-accent'>Journalism Without Fear or Favour</h5>
            <h4 className='text-xl font-medium text-gray-600'> {format(new Date(), 'EEEE, MMMM dd, yyyy')}</h4>
            <p></p>
        </div>
    );
};

export default Header;