import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    isAuthenticated: !!localStorage.getItem('token'),
    loading: true,
    user: null
  });

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.token) {
        try {
          const response = await axios.get('https://drc20calendar-32f6b6f7dd9e.herokuapp.com/api/auth', {
            headers: { 'x-auth-token': auth.token }
          });
          setAuth((prevAuth) => ({
            ...prevAuth,
            isAuthenticated: true,
            loading: false,
            user: response.data
          }));
        } catch (error) {
          setAuth((prevAuth) => ({
            ...prevAuth,
            isAuthenticated: false,
            loading: false,
            user: null
          }));
          console.error('Error fetching user:', error);
        }
      } else {
        setAuth((prevAuth) => ({ ...prevAuth, loading: false }));
      }
    };

    fetchUser();
  }, [auth.token]); // Added auth.token as a dependency

  const login = async (email, password) => {
    try {
      const response = await axios.post('https://drc20calendar-32f6b6f7dd9e.herokuapp.com/api/auth/login', {
        email,
        password
      });
      localStorage.setItem('token', response.data.token);
      setAuth((prevAuth) => ({
        ...prevAuth,
        token: response.data.token,
        isAuthenticated: true,
        loading: false,
        user: response.data.user
      }));
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setAuth((prevAuth) => ({
        ...prevAuth,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      }));
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth((prevAuth) => ({
      ...prevAuth,
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null
    }));
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
