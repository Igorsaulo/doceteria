import { CircularProgress, Grid } from '@mui/material';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import { PrivateRoute } from '../shared/guards/PrivateRoute';

const RegisterUser = lazy(() => import('../pages/RegisterUser'));

function Router() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <App />
          </PrivateRoute>
        }
        children={
          <>
            <Route
              path="register"
              element={
                <Suspense
                  fallback={
                    <Grid
                      container
                      width={'100vw'}
                      height={'85vh'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <CircularProgress size={60} />
                    </Grid>
                  }
                >
                  <RegisterUser />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        }
      />
    </Routes>
  );
}

export { Router };
