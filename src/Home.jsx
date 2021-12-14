import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Image from './Image';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Image src="project_sos_front.png" alt="Project SOS: Rescue the Future"/>
      </Box>
      <Typography variant="h3" fontFamily="Dancing Script" textAlign="center" mt={2} ml={2}>Welcome!</Typography>
      <Typography ml={2} mr={2}>
        Thank you for supporting Sophia Women's Center. We invite you to join us on November 11 to support the launch of a Portage County
        Medical Pregnancy Center! We are offering both an in-person and online event; doors open at 6:30 PM, and the event starts at
        7:00 PM.
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button
          sx={{m: 2}}
          color="primary"
          variant="contained"
          onClick={() => {
            window.open("https://secure.ministrysync.com/ministrysync/event/home.php?e=22255");
          }}
        >
          Register for the Event!
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            navigate('/support');
          }}
        >
          Donate Online!
        </Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Image src="project_sos_back.png" alt="Registration Details"/>
      </Box>
    </>
  );
};

export default Home;
