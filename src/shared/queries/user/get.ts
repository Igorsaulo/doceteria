import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAlertError } from '../../store/useAlertError';
import { useAuth } from '../../store/useAuth';
import { useUserGetControl } from '../../store/useUserGetControl';

interface IReq {
  page: number;
  filter: string;
  warningId: string | null;
}

interface IResponse {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userId: string;
  warningIDs: string[];
}

function req({ filter, page, warningId }: IReq, access_token: string) {
  let url = `/user`;

  if (page !== undefined) {
    url += `?page=${page}`;
  }

  if (filter.length > 0) {
    url += `&filter=${filter}`;
  }

  if (warningId !== undefined) {
    url += `&warningId=${warningId}`;
  }

  return backConnection.get(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export const useUserGet = (warningId: string | null) => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { controls } = useUserGetControl();
  const { isLoading, isError, isSuccess, data, refetch, isFetching } = useQuery(
    'userGet',
    () => req({ ...controls, warningId }, access_token),
    {
      staleTime: Infinity,
      onError: () => {
        handleError({
          message: 'Erro ao carregar usuários',
          status: 'error',
        });
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [controls]);

  return {
    isLoading,
    isError,
    isSuccess,
    isFetching,
    data: data?.data?.users as IResponse[],
    totalPage: parseInt(data?.data?.totalPage),
  };
};
