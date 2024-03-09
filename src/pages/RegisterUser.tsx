import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useUserPost } from '../shared/queries/user/post';

const schemaLogin = yup.object({
  firstName: yup.string().required('Campo obrigatório!'),
  lastName: yup.string().required('Campo obrigatório!'),
  email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
  password: yup.string().required('Campo obrigatório!'),
});

export default function RegisterUser() {
  const { mutate, isLoading, isSuccess } = useUserPost();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  useEffect(() => {
    if (isSuccess) {
      navigate('/login');
    }
  }, [isSuccess]);

  const onSubmit = async (data: any) => {
    if (data) {
      mutate(data);
    }
  };

  return (
    <>
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          paddingBottom: '0 !important',
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
          lg={8}
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
            <Typography
              variant="h5"
              textAlign={'start'}
              width={'100%'}
              mb={4}
              fontWeight={'bold'}
            >
              Cadastrar Usuário
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
                    label={'Nome'}
                    {...register('firstName')}
                    helperText={
                      errors?.firstName
                        ? errors?.firstName?.message?.toString()
                        : ''
                    }
                    error={errors?.firstName ? true : false}
                  />
                </Grid>
                <Grid item width={'100%'} p={'10px 0'}>
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label={'Sobrenome'}
                    {...register('lastName')}
                    helperText={
                      errors?.lastName
                        ? errors?.lastName?.message?.toString()
                        : ''
                    }
                    error={errors?.lastName ? true : false}
                  />
                </Grid>
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
                  <TextField
                    fullWidth
                    size="small"
                    variant="outlined"
                    label={'Senha'}
                    {...register('password')}
                    helperText={
                      errors?.password
                        ? errors?.password?.message?.toString()
                        : ''
                    }
                    error={errors?.password ? true : false}
                  />
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ marginTop: '30px', color: 'white' }}
                  onClick={handleSubmit(onSubmit)}
                >
                  {isLoading ? (
                    <CircularProgress
                      size={'24px'}
                      sx={{ padding: '2px', color: 'white' }}
                    />
                  ) : (
                    'Criar conta'
                  )}
                </Button>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
