import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className='mb-4'>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search articles..."
                className="border border-gray-300 rounded px-3 py-2 w-3/4"
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">Search</button>
        </form>
    );
};

export default SearchBar;
