import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from './context/appContext';
import 'normalize.css';
import './index.css';
import App from './App';
import theme from './themes/theme';
import Fonts from './Fonts';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <Fonts />
        <App />
      </ChakraProvider>
    </AppProvider>
  </React.StrictMode>
);
