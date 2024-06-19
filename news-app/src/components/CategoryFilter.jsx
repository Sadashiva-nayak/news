import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory, setPage } from '../store/ArticlesSlice';

const CategoryFilter = () => {
    const dispatch = useDispatch();
    const categories = ['home', 'world', 'technology', 'science', 'health', 'sports', 'arts'];

    const handleCategoryChange = (category) => {
        dispatch(setCategory(category));
        dispatch(setPage(1));
    };

    return (
        <div className="mb-4">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
