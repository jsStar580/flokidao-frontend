import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'
import './App.scss';
import Home from './views/Home';
import Presale from './views/Page/Presale';
import Dashboard from './views/Page/Dashboard';
import Calculator from './views/Page/Caculator';
import Page from './views/Page';

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

const theme = extendTheme({ colors,breakpoints })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/" element={<Page />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/presale" element={<Presale />} />
            <Route path="/stack" element={<Presale />} />
            <Route path="/calculator" element={<Calculator />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
