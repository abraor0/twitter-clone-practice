import { onAuthStateChanged, signInWithEmailAndPassword, User, UserCredential } from 'firebase/auth';
import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { getUserInfo } from '../apis/firestore';
import { auth } from '../config/firebase-config';
import { DocumentData } from '../../node_modules/@firebase/firestore/dist';

export type AuthContextType = {
  user: UserWithInfo | null;
  isLoggedIn: boolean;
  login(email: string, password: string): Promise<UserCredential>;
  logout(): void;
};

interface UserWithInfo extends User {
  info: DocumentData;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuthContext = () => {
  const authCtx = useContext(AuthContext);

  if (!authCtx) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }

  return authCtx;
}

const AuthProvider = ({ children }: { children: React.ReactNode}) => {
  const [user, setUser] = useState<UserWithInfo | null>(null);
  const [loading, setLoading] = useState(true);

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    auth.signOut()
  }

  useEffect(() => {
    return onAuthStateChanged(auth, async user => {
      if (user) {
        const userInfo = await getUserInfo(user.uid);
        const extendedUser: UserWithInfo = {...user, info: userInfo};
        setUser(extendedUser);
      } else {
        setUser(null);
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
