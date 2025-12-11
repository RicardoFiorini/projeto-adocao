// frontend/src/api.js
import axios from 'axios';

// Define a URL base da nossa API que está rodando na porta 5000
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export default api;