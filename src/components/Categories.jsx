import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('datas/categories.json').then(response => response.json());


const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold'>All Categories {categories.length}</h2>
            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map(category => <NavLink className='px-12 py-4 text-xl font-semibold text-gray-500 rounded-sm' key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;