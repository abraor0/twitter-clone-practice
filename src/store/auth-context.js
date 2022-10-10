import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { getUserInfo } from '../apis/firestore';
import { auth } from '../config/firebase-config';

const AuthContext = React.createContext({
  user: '',
  isLoggedIn: false,
  login: (email, password) => {},
  logout: () => {}
});

export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return auth.signOut();
  }

  useEffect(() => {
    return onAuthStateChanged(auth, async user => {
      if (user) {
        const userInfo = await getUserInfo(user.uid);
        user.info = userInfo;
        setUser(user);
      } else {
        setUser('');
      }
      setLoading(false);
    });
  }, []);

  const value = {
    user,
    isLoggedIn: !!user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
