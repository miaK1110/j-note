import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import 'focus-visible/dist/focus-visible';

import { Global, css } from '@emotion/react';
const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

// base style
import theme from './theme/Theme';
import { Router } from './router/Router';
import { Header } from './components/organisms/layout/Header';
import { Toppage } from './components/pages/Toppage';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Header />
        <Toppage />
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
