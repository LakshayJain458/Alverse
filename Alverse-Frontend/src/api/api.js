import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const getRecipe = (ingredients) => axios.post(`${API_BASE_URL}/recipe`, { ingredients });
export const getAnswer = (question) => axios.post(`${API_BASE_URL}/get`, { question });
export const generateImage = (prompt) => axios.post(`${API_BASE_URL}/Image`, { prompt });
