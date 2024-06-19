import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './components/navbar';

const App = () => {
    return (
        <>
        <Router>
        <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:title" element={<ArticlePage />} />
            </Routes>
        </Router>
        </>
    );
};

export default App;
