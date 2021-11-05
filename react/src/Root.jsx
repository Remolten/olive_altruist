import {AppBar, Box, Tabs, Tab, Toolbar, Typography} from '@mui/material';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';

const Root = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
