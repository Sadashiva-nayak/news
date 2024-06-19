import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">News App</Link>
                <div>
                    <Link to="/" className="text-white mr-4">Home</Link>
                    <Link to="/favorites" className="text-white">Favorites</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
