import { Backdrop, CircularProgress } from '@mui/material';
import { useGlobalLoading } from '../store/useGlobalLoading';

interface IProps {
  infinityOpen?: boolean;
}

export function GlobalLoading({ infinityOpen = false }: IProps) {
  const { open } = useGlobalLoading();

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      open={infinityOpen ? true : open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
