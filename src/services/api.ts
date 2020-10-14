import axios from 'axios';

const api = axios.create({
  baseURL: 'https://7b5d3b774d75.ngrok.io',
});

export default api;
