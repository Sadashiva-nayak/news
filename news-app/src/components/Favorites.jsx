import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../store/ArticleSlice';
import ArticleCard from './ArticleCard';

const Favorites = () => {
    const favorites = useSelector((state) => state.articles.favorites);
    const dispatch = useDispatch();

    return (
        <div className="favorites">
            <h2 className="text-2xl font-semibold mb-4">Your Favorite Articles</h2>
            {favorites.length === 0 ? (
                <p className="text-gray-500">You have no favorite articles.</p>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {favorites.map((article) => (
                        <div key={article.url} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <ArticleCard article={article} />
                            <button
                                onClick={() => dispatch(removeFavorite(article))}
                                className="block w-full bg-red-500 text-white py-2 px-4 rounded-b-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                Remove from Favorites
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
