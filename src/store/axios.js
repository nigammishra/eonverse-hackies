// axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/enoverse/auth',
});

API.interceptors.request.use((req) => {
  const userDetails = localStorage.getItem('userDetails');
  if (userDetails) {
    const token = JSON.parse(userDetails).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;

