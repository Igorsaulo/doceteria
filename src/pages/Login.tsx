import { Box } from '@mui/material';
import LoginForm from '../shared/components/login';
import { useAuth } from '../shared/store/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { access_token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (access_token) {
      navigate('/');
    }
  }, [access_token, navigate]);

  return (
    <Box
      sx={{
        minHeight: '100vh - 2rem',
        minWidth: '100vw - 2rem',
        display: 'flex',
        justifyContent: 'end',
      }}
    >
      <LoginForm />
    </Box>
  );
}
