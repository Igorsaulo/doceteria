import { useQuery } from 'react-query';
import { backConnection } from '../../services/backConnection';

async function req() {
  const accessToken = window.sessionStorage.getItem('accessToken');
  if (accessToken) {
    return await backConnection.get(`/auth/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}

export const useProfile = () => {
  const { isLoading, isError, isSuccess, data, refetch } = useQuery(
    'authProfile',
    req,
    {
      staleTime: Infinity,
    }
  );

  return {
    isLoading,
    isError,
    isSuccess,
    refetch,
    data: data?.data,
  };
};
