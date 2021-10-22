import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';

// base style
import theme from './theme/Theme';
import { Header } from './pages/Header';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <h1>Laravel SPA!!</h1>;
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
