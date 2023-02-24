import React, {createContext, useContext, useEffect, useState} from 'react';
import {SnackbarContextType} from '@app/types/SnackbarContext';

export const SnackbarContext = createContext({} as SnackbarContextType);

export const SnackbarProvider = ({children}: {children: JSX.Element}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarEmoji, setSnackbarEmoji] = useState('');

  useEffect(() => {
    if (snackbarMessage !== '') {
      setIsVisible(true);
    }
  }, [snackbarMessage]);

  return (
    <SnackbarContext.Provider
      value={{
        snackbarMessage,
        setSnackbarMessage,
        isVisible,
        setIsVisible,
        snackbarEmoji,
        setSnackbarEmoji,
      }}>
      {children}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error('Snackbar should be used inside SnackbarProvider');
  }
  return context;
};
