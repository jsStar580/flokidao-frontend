import { useEffect, useState } from 'react';

interface ThemeTogglerProps {
    themeToggler: () => void;
    theme:string;
  }

export const useThemeMode = () => {
  const [theme, setTheme] = useState('dark');

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const themeToggler = () => (theme === 'dark' ? setMode('light') : setMode('dark'));

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, []);
  const themeTogglerData:ThemeTogglerProps={
      themeToggler:themeToggler,
      theme:theme
  }

  
  return themeTogglerData;
};

export default useThemeMode;
