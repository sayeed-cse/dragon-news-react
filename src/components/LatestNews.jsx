import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-base-200 p-4 flex items-center gap-5'>
            <p className='text-base-100 bg-secondary py-2 px-6 text-xl font-medium'>Latest</p>
            <Marquee pauseOnHover={true} gradient={true} gradientColor='#f3f3f3' gradientWidth={50}>
                <p className='text-lg font font-semibold border-e-2 border-red-800 px-4'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='text-lg font font-semibold border-e-2 border-red-800 px-4'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                <p className='text-lg font font-semibold border-e-2 border-red-800 px-4'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;