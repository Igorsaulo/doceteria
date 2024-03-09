import { Navigate } from 'react-router-dom';
import { useAuth } from '../store/useAuth';
import { useProfile } from '../queries/auth/profile';
import { useEffect } from 'react';

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const { access_token, setProfile } = useAuth();
  const { data } = useProfile();

  useEffect(() => {
    if (data) setProfile(data);
  }, [data, setProfile]);

  return <>{access_token ? children : <Navigate to={'/login'} />}</>;
}
