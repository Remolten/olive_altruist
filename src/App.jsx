import {Box, createTheme, ThemeProvider} from '@mui/material';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Root from './Root';
import Home from './Home';
import Donate from './Donate';

const theme = createTheme({
  palette: {
    primary: {
      // main: '#315DA4',
      // main: '#253229',
      main: '#80978E',
      contrastText: 'black',
    },
    secondary: {
      // main: '#A7D9F6',
      // main: '#80978E',
      main: '#253229',
      contrastText: 'white'
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{width: '100%', height: '100vh'}}>
        <HashRouter>
          <Routes>
            <Route path="/*" element={<Root/>}>
              <Route index element={<Home/>}/>
              <Route path="support" element={<Donate/>}/>
            </Route>
          </Routes>
        </HashRouter>
      </Box>
    </ThemeProvider>
  );
};

export default App;
