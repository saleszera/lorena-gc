import React, { createContext, useContext } from 'react';

interface INotificationProvider {
  children: React.ReactNode;
}

const NotificationContext = createContext(null);

const NotificationProvider = ({ children }: INotificationProvider) => {
  return (
    <NotificationContext.Provider value={null}>
      {children}
    </NotificationContext.Provider>
  );
};

const useNotification = () => {
  const context = useContext(NotificationContext);

  if (context === null) {
    throw new Error('useNotification must be used within NotificationProvider');
  }

  return context;
};

export { NotificationProvider, useNotification };
