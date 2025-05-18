import React from 'react';
import swimmingImage from '../../assets/swimming.png'
import classImage from '../../assets/class.png'
import playgroundImage from '../../assets/playground.png'
const Qzone = () => {
    return (
        <div className=' bg-base-200 p-3'>
            <h2 className='text-xl font-bold mb-5'>Q-zone</h2>
            <div className='space-y-5 *:border *:border-dashed *:border-gray-400'>
                <img src={swimmingImage} alt="" className='w-full'/>
                <img src={classImage} alt="" className='w-full'/>
                <img src={playgroundImage} alt="" className='w-full'/>
            </div>
        </div>
    );
};

export default Qzone;