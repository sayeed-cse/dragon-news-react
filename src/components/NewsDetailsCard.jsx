import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    console.log(news)
    return (
        <div className='border rounded-2xl p-8'>
            <img src={news.image_url} alt=""  className='w-full'/>
            <h1 className='text-3xl font-bold my-5'>{news.title}</h1>
            <p className='text-lg leading-7 text-gray-600'>{news.details}</p>
            <Link className='btn lg:btn-lg bg-secondary hover:bg-[#b91a44] text-white mt-5' to={`/category/${news.category_id}`}><FaArrowLeft></FaArrowLeft> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;