import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginService, register as registerService } from '../services/auth';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await loginService(email, password);
      setUser(userData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userData = await registerService(email, password);
      setUser(userData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, login, register };
}
