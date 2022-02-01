import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import './App.scss';
import Home from './views/Home';
import Presale from './views/Page/Presale';
import Dashboard from './views/Page/Dashboard';
import Calculator from './views/Page/Caculator';
import Page from './views/Page';
import Stake from './views/Page/Stake';
;
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ThemeContext from './contexts/ThemeContext';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import { useAddress, useWeb3Context } from 'hooks';
import Ventures from 'views/Page/Ventures';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
})

const chakraTheme = extendTheme({ colors, breakpoints })

function App() {

  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const dispatch = useDispatch();

  const { connect, provider, hasCachedProvider, chainID, connected } = useWeb3Context();
  const address = useAddress();

  const [walletChecked, setWalletChecked] = useState(false);

  useEffect(() => {
    if (hasCachedProvider()) {
      connect().then(() => {
        setWalletChecked(true);
      });
    } else {
      setWalletChecked(true);
    }
  }, []);

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />

        <Router>
          <ChakraProvider theme={chakraTheme}>
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/" element={<Page themeToggle={themeToggler} />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/presale" element={<Presale />} />
                <Route path="/stake" element={<Stake />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/ventures" element={<Ventures />} />
              </Route>
            </Routes>
          </ChakraProvider>
        </Router>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
