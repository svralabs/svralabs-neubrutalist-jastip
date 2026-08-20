import axios from 'axios';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('jwt='))?.split('=')[1];
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/auth';
      } else if (error.response.status >= 400 && error.response.status < 500) {
        toast.error(error.response.data.message || 'Request failed');
      } else {
        toast.error('Server error');
      }
    } else {
      toast.error('Network error');
    }
    return Promise.reject(error);
  }
);

export default api;
