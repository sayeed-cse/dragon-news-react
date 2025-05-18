import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FIndUs = () => {
    return (
        <div>
            <h2 className='text-xl font-bold mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item bg-white btn-xl"><FaFacebook className='text-blue-600'></FaFacebook> Facebook</button>
                <button className="btn join-item bg-white btn-xl"><FaTwitter className='text-sky-400'></FaTwitter> Twitter</button>
                <button className="btn join-item bg-white btn-xl"><FaInstagram></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FIndUs;