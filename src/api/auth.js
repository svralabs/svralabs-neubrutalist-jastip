import api from './index';

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  document.cookie = `jwt=${response.data.token}; path=/`;
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const logout = () => {
  document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  window.location.href = '/auth';
};

export const getUser = async () => {
  const response = await api.get('/auth/user');
  return response.data;
};
