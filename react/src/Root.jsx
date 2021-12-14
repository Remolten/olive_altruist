import {useState} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {AppBar, Box, Button, Tabs, Tab, Toolbar, Typography} from '@mui/material';
import {Phone as PhoneIcon} from '@mui/icons-material';
import Subscribe from './Subscribe';

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [openSubscribe, setOpenSubscribe] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography sx={{mr: 1}} variant="h6">Friends of Sophia Women's Center</Typography>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            value={location.pathname.includes('support') ? '/support' : '/'}
            onChange={(e, newValue) => {
              navigate(newValue);
            }}
          >
            <Tab value="/" label="Home"/>
            <Tab value="/support" label="Donate"/>
          </Tabs>
          <Box sx={{flex: 1}}/>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => {
              setOpenSubscribe(true);
            }}
          >
            <PhoneIcon/>&nbsp;Subscribe
          </Button>
          <Subscribe
            open={openSubscribe}
            onClose={() => {
              setOpenSubscribe(false);
            }}
          />
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Box sx={{width: '100%', height: '100%'}}>
        <Outlet/>
      </Box>
    </>
  )
};

export default Root;
