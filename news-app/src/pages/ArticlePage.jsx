import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticlePage = () => {
    const { title } = useParams();
    const article = useSelector((state) =>
        state.articles.articles.find((a) => a.title === title)
    );

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-4">{article.title}</h1>
            <img className="w-full" src={article.urlToImage} alt={article.title} />
            <p className="text-gray-700 text-base mt-4">{article.content}</p>
        </div>
    );
};

export default ArticlePage;
