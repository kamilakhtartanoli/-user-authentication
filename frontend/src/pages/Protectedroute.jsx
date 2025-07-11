import React from 'react';
import { Navigate } from 'react-router';

const Protectedroute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // token set after login

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default Protectedroute;