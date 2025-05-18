import React from 'react';
import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const NewsCard = ({ news }) => {
    
    const { id, category_id, title, rating, total_view, author, thumbnail_url, image_url, details, tags, others, production } = news;
    const formattedDate = new Date(author.published_date).toLocaleDateString()

    return (
        <div className='card bg-base-100 shadow-md'>
                <div className="card-body p-5 pb-2">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src={author.img} alt="Author" />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-semibold text-sm">{author.name}</h2>
                                <p className="text-xs text-gray-500">{formattedDate}</p>
                            </div>
                        </div>
                        <div className="flex gap-3 text-lg text-gray-500">
                            <FaBookmark className="cursor-pointer" />
                            <FaShareAlt className="cursor-pointer" />
                        </div>
                    </div>

                    <h3 className="font-bold text-lg leading-6">
                        {title}
                    </h3>

                    <div className="py-4">
                        <img
                            src={image_url}
                            alt="News Preview"
                            className="rounded-lg w-full object-cover max-h-72"
                        />
                    </div>

                    <div className=" text-gray-600">
                       {
                        details.length > 200 
                        ?
                        <>
                            {details.slice(0,200)}... <Link to={`/news-details/${id}`} className="text-orange-600 font-semibold mt-1 cursor-pointer">Read More</Link>
                        </> 
                        :
                         details
                       }
                    </div>


                    <div className="flex items-center justify-between pt-4 border-t mt-4">
                        <div className="flex items-center text-orange-500">
                            {Array.from({length: rating.number}).map((_,i)=>(
                                <FaStar key={i} className="mr-1" />
                            ))}
                            <span className="text-sm text-gray-700 ml-1">{rating.number}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                            <FaEye className="mr-1" /> {total_view}
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default NewsCard;