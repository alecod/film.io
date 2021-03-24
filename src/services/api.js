import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://sujeitoprogramador.com/',
})

export default api