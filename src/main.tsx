import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import queryClient from './shared/services/queryClient';
import { GlobalLoading } from './shared/components/GlobalLoading';
import './shared/components/global/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <CssBaseline />
        <Router />
        <GlobalLoading />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);
