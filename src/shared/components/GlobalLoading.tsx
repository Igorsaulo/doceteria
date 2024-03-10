import { useEffect } from 'react';
import { notification } from 'antd';
import { useGlobalLoading } from '../store/useGlobalLoading';

interface IProps {
  infinityOpen?: boolean;
}

export function GlobalLoading({ infinityOpen = false }: IProps) {
  const { open } = useGlobalLoading();

  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (open) {
      api.info({
        message: 'Notification topLeft',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement: 'topLeft',
      });
    }
  }, [api, open]);

  return (
   <>
    {contextHolder}
    </>
  )
}
