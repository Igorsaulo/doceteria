import { useMutation } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAlertError } from '../../store/useAlertError';

type IReq = {
  email: string;
  password: string;
};

async function req(data: IReq) {
  return backConnection.post(`/auth/login`, {
    email: data.email,
    password: data.password,
  });
}

export const useLogin = () => {
  const { handleError } = useAlertError();
  const { isLoading, isError, isSuccess, mutate, data } = useMutation(
    (data: IReq) => req(data),
    {
      onMutate: () => {
        handleError({
          message: 'Logando...',
          status: 'info',
        });
      },
      onSuccess: () => {
        handleError({
          message: 'Login realizado com sucesso',
          status: 'success',
        });
      },
      onError: (error: any) => {
        handleError({
          message: error.message,
          status: 'error',
        });
      },
    }
  );

  if (isSuccess) {
    sessionStorage.setItem('accessToken', data?.data?.access_token);
    window.location.reload();
  }

  return {
    isLoading,
    isError,
    isSuccess,
    mutate,
  };
};
