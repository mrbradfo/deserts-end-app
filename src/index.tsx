import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home';
import Routes from './Routes';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Routes />
      <Home />
    </ChakraProvider>
  </React.StrictMode>,
);
