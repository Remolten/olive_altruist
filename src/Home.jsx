import {Box, Button, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import Image from './Image';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        {/*<Image src="logo.png" alt="Sophia Women's Center Logo"/>*/}
        <Image
          src="sophia22_invite.png"
          alt="2022 Sophia Women's Center Vision Night Invitation Front"
        />
      </Box>
      <Typography variant="h3" fontFamily="Dancing Script" textAlign="center" mt={2} ml={2}>Welcome!</Typography>
      <Typography ml={2} mr={2}>
        Thank you for supporting Sophia Women's Center. If you would like to stay connected with us by phone, please click the subscribe
        button at the top-right of the page and complete the form. Once completed, you will be able to receive phone message updates from
        us!
      </Typography>
      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', m: 2}}>
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
    </>
  );
};

export default Home;
