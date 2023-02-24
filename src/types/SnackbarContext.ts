import React from 'react';

export interface SnackbarContextType {
  snackbarMessage: string;
  setSnackbarMessage: React.Dispatch<React.SetStateAction<string>>;
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  snackbarEmoji: string;
  setSnackbarEmoji: React.Dispatch<React.SetStateAction<string>>;
}
