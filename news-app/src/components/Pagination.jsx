import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/ArticlesSlice';

const Pagination = () => {
    const dispatch = useDispatch();
    const { page, pageSize, filteredArticles } = useSelector((state) => state.articles);
    const totalPages = Math.ceil(filteredArticles.length / pageSize);

    return (
        <div className="flex justify-center mt-10 mb-20">
            <button
                onClick={() => dispatch(setPage(page - 1))}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                disabled={page === 1}
            >
                Previous
            </button>
            <span className="py-2 px-4">{page} of {totalPages}</span>
            <button
                onClick={() => dispatch(setPage(page + 1))}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                disabled={page === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
