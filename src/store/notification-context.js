import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const NotificationContext = createContext({
  message: '',
  setMessage: () => {}
})

export const useNotificationContext = () => useContext(NotificationContext);

const NotificationProvider = ({ children }) => {
  const [ message, setMessage ] = useState('');

  const value = {
    message,
    setMessage
  }

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