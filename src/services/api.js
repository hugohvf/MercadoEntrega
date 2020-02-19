import axios from 'axios';

const api = axios.create({
    baseURL: 'https://52a28193.ngrok.io',
});

export default api;