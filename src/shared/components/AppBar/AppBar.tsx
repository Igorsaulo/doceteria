import Logout from '@mui/icons-material/Logout';
import Settings from '@mui/icons-material/Settings';
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  Tooltip,
} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { useAuth } from '../../store/useAuth';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { useNavigate } from 'react-router-dom';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import HomeIcon from '@mui/icons-material/Home';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function TopBar() {
  const navigate = useNavigate();
  const { logout, profile } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }} pt={8}>
      <MuiAppBar position="fixed">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            aria-label="tela inicial"
            onClick={() => navigate('/warnings')}
          >
            <HomeIcon sx={{ color: 'white' }} />
          </IconButton>
          <Box>
            <Button
              variant="text"
              sx={{ color: 'white' }}
              size="small"
              startIcon={<LightbulbIcon sx={{ color: 'white' }} />}
              onClick={() => navigate('/suggestions/register')}
            >
              Sugerir melhorias
            </Button>
            <Tooltip title="Configurações da conta">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  {profile.firstName[0]}
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar>{profile.firstName[0]}</Avatar>
              {profile.firstName}
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Configurações
            </MenuItem>
            <MenuItem onClick={() => navigate('/point')}>
              <ListItemIcon>
                <AccessTimeFilledIcon fontSize="small" />
              </ListItemIcon>
              Meu ponto
            </MenuItem>
            <MenuItem onClick={() => navigate('/suggestions')}>
              <ListItemIcon>
                <AssistantPhotoIcon fontSize="small" />
              </ListItemIcon>
              Sugestões
            </MenuItem>
            <MenuItem onClick={() => navigate('/register')}>
              <ListItemIcon>
                <GroupAddIcon fontSize="small" />
              </ListItemIcon>
              Cadastrar Usuário
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                logout();
              }}
            >
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sair
            </MenuItem>
          </Menu>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
