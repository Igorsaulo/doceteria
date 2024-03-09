import { useMutation } from 'react-query';
import { useAlertError } from '../../store/useAlertError';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';

interface IReq {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  id: number;
}

function req({ data, id }: IReq, access_token: string) {
  return backConnection.patch(`/user/${id}`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });
}

export const useUserPatch = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    ({ data, id }: IReq) => req({ data, id }, access_token),
    {
      onMutate: () => {
        handleError({
          message: 'Atualizando usuário...',
          status: 'info',
        });
      },
      onSuccess: () => {
        handleError({
          message: 'Usuário atualizado com sucesso',
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
