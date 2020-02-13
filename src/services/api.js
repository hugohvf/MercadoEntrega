import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.30.9.15:3333',
});

export default api;