import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import queryClient from './shared/services/queryClient';
import { ErrorMessage } from './shared/components/ErrorMessage/ErrorMessage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Router />
        <ErrorMessage />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
