import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './ArticlesSlice';

export const store = configureStore({
    reducer: {
        articles: articlesReducer,
    },
});
