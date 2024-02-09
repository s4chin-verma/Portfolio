import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface ThemeContextType {
   isDarkMode: boolean;
   toggle: () => void;
   enableDarkMode: () => void;
   disableDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [isDarkMode, setIsDarkMode] = useState<boolean>(
      () => (typeof window !== 'undefined' && JSON.parse(localStorage.getItem('darkMode') || 'true')) || false
   );

   const toggle = useCallback(() => {
      setIsDarkMode(prev => !prev);
   }, []);

   const enableDarkMode = useCallback(() => {
      setIsDarkMode(true);
   }, []);

   const disableDarkMode = useCallback(() => {
      setIsDarkMode(false);
   }, []);

   useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
      if (isDarkMode) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }, [isDarkMode]);

   return (
      <ThemeContext.Provider
         value={{
            isDarkMode,
            toggle,
            enableDarkMode,
            disableDarkMode,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};

export function useDarkMode() {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useDarkMode must be used within a ThemeProvider');
   }
   return context;
}
