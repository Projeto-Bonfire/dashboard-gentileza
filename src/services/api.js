import axios from 'axios';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: 'https://200fe5df-ecb9-43b6-9e98-be363719c439-00-24oq7mlfuvtyl.kirk.replit.dev/v3/',
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;