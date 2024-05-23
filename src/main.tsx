import { Global, ThemeProvider } from '@emotion/react';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/hooks/queryClient';

import { AppRouter } from '@/router/router';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { Theme } from '@/styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <ThemeProvider theme={Theme}>
        <Global styles={GlobalStyle} />
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
