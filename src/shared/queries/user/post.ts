import { useMutation } from 'react-query';
import { useAlertError } from '../../store/useAlertError';
import { backConnection } from '../../services/backConnection';

interface IReq {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

function req(data: IReq) {
  return backConnection.post('/user', data);
}

export const useUserPost = () => {
  const { handleError } = useAlertError();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (data: IReq) => req(data),
    {
      onMutate: () => {
        handleError({
          message: 'Criando usuário...',
          status: 'info',
        });
      },
      onSuccess: () => {
        handleError({
          message: 'usuário criado com sucesso',
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

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
  };
};
