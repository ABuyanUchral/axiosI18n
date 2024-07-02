// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  console.log('Request:', config); // Log request
  return config;
});

api.interceptors.response.use(
  (response) => {
    console.log('Response:', response); // Log response
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    console.error('Error response:', error); // Log error response
    return Promise.reject(error);
  }
);

export default api;
