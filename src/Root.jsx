import {useState} from 'react';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  useMediaQuery
} from '@mui/material';
import {Home as HomeIcon, Menu as MenuIcon, AddIcCall as AddIcCallIcon, Redeem as RedeemIcon} from '@mui/icons-material';
import Subscribe from './Subscribe';

const Root = () => {
  const lt650 = useMediaQuery('(max-width: 650px)');
  const lt400 = useMediaQuery('(max-width: 400px)');

  const location = useLocation();
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [openSubscribe, setOpenSubscribe] = useState(false);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          {lt650 &&
          <>
            <IconButton
              sx={{mr: 2}}
              edge="start"
              color="inherit"
              aria-label="Menu of pages"
              onClick={() => {
                setOpenDrawer(true);
              }}
            >
              <MenuIcon/>
            </IconButton>
            <SwipeableDrawer
              anchor="left"
              open={openDrawer}
              onOpen={() => {
                setOpenDrawer(true);
              }}
              onClose={() => {
                setOpenDrawer(
                  false);
              }}
            >
              <List sx={{minWidth: '250px'}}>
                <ListItem
                  button
                  onClick={() => {
                    navigate('/');
                    setOpenDrawer(false);
                  }}
                >
                  <ListItemIcon><HomeIcon/></ListItemIcon>
                  <ListItemText primary="Home"/>
                </ListItem>
                <ListItem
                  button
                  onClick={() => {
                    navigate('/support');
                    setOpenDrawer(false);
                  }}
                >
                  <ListItemIcon><RedeemIcon/></ListItemIcon>
                  <ListItemText primary="Donate"/>
                </ListItem>
              </List>
            </SwipeableDrawer>
          </>
          }
          <Typography sx={{mr: 1}} variant="h6">Friends of Sophia Women's Center</Typography>
          {!lt650 &&
          <>
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
          </>
          }
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => {
              setOpenSubscribe(true);
            }}
          >
            <AddIcCallIcon/>&nbsp;{!lt400 && 'Subscribe'}
          </Button>
          <Subscribe
            open={openSubscribe}
            onClose={() => {
              setOpenSubscribe(false);
            }}
          />
        </Toolbar>
      </AppBar>
      <Box sx={{width: '100%', height: '100%'}}>
        <Outlet/>
      </Box>
    </>
  )
};

export default Root;
