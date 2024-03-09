import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  CircularProgress,
  Divider,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Pagination,
  Select,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { limitText } from '../helpers/limitText';
import { useUserGet } from '../queries/user/get';
import { useUserGetControl } from '../store/useUserGetControl';
import { useUsersSidebar } from '../store/useUsersSidebar';
import { useEffect } from 'react';

export function UsersSidebar() {
  const { id } = useParams();
  const { open, closedSidebar } = useUsersSidebar();
  const { controls, setControls, resetState } = useUserGetControl();
  const { data, isLoading, totalPage } = useUserGet(id as string | null);

  const handlePageChange = (_: any, value: number) => {
    setControls({ ...controls, page: value });
  };

  useEffect(() => {
    resetState();
  }, []);

  return (
    <>
      <Drawer anchor={'right'} open={open} onClose={closedSidebar}>
        <Box sx={{ width: { md: 300, xs: '100vw' } }} role="presentation">
          <Grid
            container
            justifyContent={'flex-end'}
            alignItems={'center'}
            p={1}
          >
            <IconButton aria-label="fechar" onClick={closedSidebar}>
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
          <Divider />
          <Box>
            <Box p={2}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filtro</InputLabel>
                <Select
                  labelId="select-type-user"
                  id="select-type-user"
                  value={controls.filter}
                  label="Filtro"
                  onChange={event =>
                    setControls({ ...controls, filter: event.target.value })
                  }
                >
                  <MenuItem value={'some'}>Lidos</MenuItem>
                  <MenuItem value={'none'}>Não lidos</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <List>
              {!isLoading ? (
                data?.map(user => (
                  <ListItem key={user.userId} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary={limitText(
                          `${user.firstName} ${user.lastName}`,
                          15
                        )}
                      />
                    </ListItemButton>
                  </ListItem>
                ))
              ) : (
                <Grid
                  container
                  alignItems={'center'}
                  justifyContent={'center'}
                  m={2}
                >
                  <CircularProgress />
                </Grid>
              )}
              <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                mt={2}
              >
                <Pagination
                  count={totalPage ? Math.ceil(totalPage / 10) : 0}
                  color="primary"
                  page={controls.page}
                  onChange={handlePageChange}
                />
              </Grid>
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
