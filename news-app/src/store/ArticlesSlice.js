import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../api/nytAPI';

const initialState = {
    articles: [],
    loading: false,
    error: null,
    category: 'home',
    page: 1,
    pageSize: 9,
    searchQuery: '',
    filteredArticles: [],
    favorites: [],
};

export const getArticles = createAsyncThunk(
    'articles/getArticles',
    async ({ category }, thunkAPI) => {
        const response = await fetchArticles(category);
        return response;
    }
);

export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setFilteredArticles: (state, action) => {
            state.filteredArticles = action.payload;
        },
        toggleFavorite: (state, action) => {
            const { article } = action.payload;
            const index = state.favorites.findIndex((a) => a.url === article.url);
            if (index === -1) {
                state.favorites.push(article);
            } else {
                state.favorites.splice(index, 1);
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
                state.filteredArticles = action.payload; 
            })
            .addCase(getArticles.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setCategory, setPage, setSearchQuery, setFilteredArticles, toggleFavorite } = articlesSlice.actions;
export default articlesSlice.reducer;
