import React from 'react';
import SocialLogin from './SocialLogin';
import FIndUs from './FIndUs';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FIndUs></FIndUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;