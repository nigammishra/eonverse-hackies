// axios.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://anchovy-usable-solely.ngrok-free.app/enoverse/auth',
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true'
  },
  // withCredentials: true,
});

// Add an interceptor to attach the Authorization token
API.interceptors.request.use(
  (req) => {
    try {
      const userDetails = localStorage.getItem('userDetails');
      if (userDetails) {
        const { token } = JSON.parse(userDetails);
        if (token) {
          req.headers.Authorization = `Bearer ${token}`;
        }
      }
    } catch (error) {
      console.error('Error parsing user details:', error);
    }
    return req;
  },
  (error) => Promise.reject(error)
);

// Generic function to handle API requests
export const fetchData = async (method, url, data = null) => {
  try {
    const response = await API({ method, url, data });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

export default API;
