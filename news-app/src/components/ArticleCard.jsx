import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../store/ArticlesSlice';

const ArticleCard = ({ article, showFavoriteButton = true }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.articles.favorites);
    const isFavorite = favorites.some((fav) => fav.url === article.url);

    const handleToggleFavorite = () => {
        dispatch(toggleFavorite({ article }));
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-56" src={article.multimedia[0]?.url} alt={article.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
                <p className="text-gray-700 text-base">
                    {article.abstract}
                </p>
                <div className="flex items-center mt-2">
                <Link to={`${article.url}`} className="text-blue-500 mr-4">Read more</Link>
                {showFavoriteButton && (
                    <button
                    onClick={handleToggleFavorite}
                    className={` py-2 px-4 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
                    >
                        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                )}
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
