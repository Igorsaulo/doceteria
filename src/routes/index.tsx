import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import App from '../App';
import { PrivateRoute } from '../shared/guards/PrivateRoute';
import { Home } from '../pages';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <App />
        }
        children={
          <Route path="/" element={<Home />} />
        }
      />
    </Routes>
  );
}

export { Router };
