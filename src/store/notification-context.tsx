import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

type NotificationContextType = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const NotificationContext = createContext<NotificationContextType | null>(null);

export const useNotificationContext = () => {
  const notCtx = useContext(NotificationContext);

  if (!notCtx) {
    throw new Error('useNotificationContext must be used within a NotificationProvider');
  }

  return notCtx;
}

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [ message, setMessage ] = useState('');

  const value = {
    message,
    setMessage
  };

  useEffect(() => {
    if (message) {
      const timeoutId = setTimeout(setMessage, 5000, '');
      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;