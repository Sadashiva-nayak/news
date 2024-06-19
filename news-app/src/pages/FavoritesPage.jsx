import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';

const FavoritesPage = () => {
    const { favorites } = useSelector((state) => state.articles);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-4">Favorites</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {favorites.map((article) => (
                    <ArticleCard key={article.url} article={article} showFavoriteButton={false} />
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
