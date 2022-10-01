import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: true,
  login: token => {},
  logout: () => {}
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const value = {
    token,
    isLoggedIn: !!token,
    login: token => setToken(token),
    logout: () => setToken('')
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
