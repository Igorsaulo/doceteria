import { useMutation } from 'react-query';
import { useAlertError } from '../../store/useAlertError';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';

interface IReq {
  id: number;
}

function req({ id }: IReq, access_token: string) {
  return backConnection.delete(`/user/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });
}

export const useUserDelete = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    ({ id }: IReq) => req({ id }, access_token),
    {
      onMutate: () => {
        handleError({
          message: 'Deletando usuário...',
          status: 'info',
        });
      },
      onSuccess: () => {
        handleError({
          message: 'Usuário Deletado com sucesso',
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
