import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Background from '../../../assets/banner.svg';
import { useLogin } from '../../queries/auth/login';
import { useAuth } from '../../store/useAuth';
import * as yup from 'yup';

const schemaLogin = yup.object({
  email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
  password: yup.string().required('Campo obrigatório!'),
});

export default function LoginForm() {
  const { mutate, isLoading } = useLogin();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { access_token } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  useEffect(() => {
    if (access_token) {
      navigate('/warnings');
    }
  }, [access_token]);

  const onSubmit = async (data: any) => {
    if (data) {
      mutate(data);
    }
  };

  return (
    <>
      {' '}
      {!access_token && (
        <Grid
          container
          alignItems={'center'}
          justifyContent={'center'}
          height={'100vh'}
          sx={{
            paddingBottom: '0 !important',
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            overflow: 'hidden !important',
          }}
        >
          <Grid
            container
            item
            alignItems={'center'}
            justifyContent={'center'}
            sm={10}
            md={6}
            lg={4}
            marginLeft={{ sm: 0, md: 50, lg: 80 }}
            p={4}
            height={'100%'}
          >
            <Paper
              variant="elevation"
              sx={{
                padding: 5,
                borderRadius: '15px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Grid container item justifyContent={'center'}>
                <Typography
                  textAlign={'center'}
                  variant="h5"
                  fontWeight={'bold'}
                  marginBottom={2}
                >
                  Olá, Bem vindo de volta
                </Typography>
              </Grid>
              <Typography
                variant="subtitle1"
                textAlign={'start'}
                width={'100%'}
                marginTop={2}
                marginBottom={2}
                fontWeight={'bold'}
              >
                LOGIN
              </Typography>
              <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
              >
                <form style={{ width: '100%' }}>
                  <Grid item width={'100%'} p={'10px 0'}>
                    <TextField
                      fullWidth
                      size="small"
                      variant="outlined"
                      label={'Email'}
                      {...register('email')}
                      helperText={
                        errors?.email ? errors?.email?.message?.toString() : ''
                      }
                      error={errors?.email ? true : false}
                    />
                  </Grid>
                  <Grid item width={'100%'} p={'10px 0'}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        size="small"
                        htmlFor="outlined-adornment-password"
                        error={errors?.password ? true : false}
                      >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        size="small"
                        {...register('password')}
                        error={errors?.password ? true : false}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              onMouseDown={event => event.preventDefault()}
                              edge="end"
                              color={errors?.password ? 'error' : 'default'}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                      <FormHelperText error>
                        {errors?.password
                          ? errors?.password?.message?.toString()
                          : ''}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ margin: '20px 0', color: 'white' }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    {isLoading ? (
                      <CircularProgress
                        size={'24px'}
                        sx={{ padding: '2px', color: 'white' }}
                      />
                    ) : (
                      'Login'
                    )}
                  </Button>
                </form>
                <Typography
                  variant="caption"
                  sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={() => navigate('/register')}
                >
                  Não tem uma conta ainda?
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
}
