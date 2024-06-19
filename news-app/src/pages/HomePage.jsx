import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, setFilteredArticles, setPage, setSearchQuery } from '../store/ArticlesSlice';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
    const dispatch = useDispatch();
    const { articles, category, page, searchQuery, loading, error, pageSize, filteredArticles } = useSelector((state) => state.articles);

    useEffect(() => {
        dispatch(getArticles({ category }));
    }, [dispatch, category]);

    useEffect(() => {
        const filtered = articles.filter((article) =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        dispatch(setFilteredArticles(filtered));
    }, [articles, searchQuery, dispatch]);

    const currentArticles = filteredArticles.slice((page - 1) * pageSize, page * pageSize);

    const handleSearch = (query) => {
        dispatch(setSearchQuery(query));
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-4">News Articles</h1>
            <SearchBar handleSearch={handleSearch} />
            <CategoryFilter />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentArticles.map((article) => (
                    <ArticleCard key={article.url} article={article} />
                ))}
            </div>
            <Pagination />
        </div>
    );
};

export default HomePage;
