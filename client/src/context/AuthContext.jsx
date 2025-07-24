// client/src/context/AuthContext.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate();
  const base = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token
      ? `Bearer ${token}`
      : '';
  }, [token]);

  const login = async (email, password) => {
    const { data } = await axios.post(`${base}/auth/login`, { email, password });
    setToken(data.token);
    localStorage.setItem('token', data.token);
    navigate('/admin/dashboard');
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}