import { Global, ThemeProvider } from '@emotion/react';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRouter } from '@/router/router';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <Global styles={GlobalStyle} />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>,
);
