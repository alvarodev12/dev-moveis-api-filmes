import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '36234d647570549f01dd45dc86ccb2a1',
        language: 'pt-BR',
        page: 1
    }
});

export default api;
