import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useThemeMode } from '../../hooks/useThemeMode';
import { lightTheme, darkTheme } from 'styles/themes';

const ThemeContext: React.FC = ({ children }) => {
  const { theme } = useThemeMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;