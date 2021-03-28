import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import Root from './Root';

import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
