import axios from 'axios';

const api = axios.create({
    baseURL: 'http://35.247.242.17:3333',
});

export default api;