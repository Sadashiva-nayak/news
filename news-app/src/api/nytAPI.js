import axios from 'axios';

const BASE_URL = 'https://api.nytimes.com/svc/topstories/v2';
const API_KEY = '9E8c5J7tMKhHSxhnWuEItw8twa4zQHvP'; 

export const fetchArticles = async (category = 'home') => {
    try {
        const response = await axios.get(`${BASE_URL}/${category}.json`, {
            params: {
                'api-key': API_KEY,
            },
        });
        return response.data.results;
    } catch (error) {
        throw new Error('Error fetching articles from NYT');
    }
};
