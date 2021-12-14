import {useCallback, useState} from 'react';
import {Box, Typography, Skeleton} from '@mui/material';

const Donate = () => {
  const [loadingDonationForm, setLoadingDonationForm] = useState(true);
  const [loadedDonationForm, setLoadedDonationForm] = useState(false);

  const loadDonationForm = useCallback(node => {
    if (node !== null && !loadedDonationForm) {
      const script = document.createElement('script');

      script.src = "https://www.iatspayments.com/AURA/AURA.aspx?PID=PAF4580EC898E17324";
      script.async = true;
      script.onload = () => {
        setLoadedDonationForm(true);

        // Waits a second, so that the iATS donation form renders before we hide the Skeleton.
        setTimeout(() => {
          setLoadingDonationForm(false);
        }, 1000);
      };
      script.onerror = () => {
        console.error('Failed to load donation form.');
        setLoadingDonationForm(false);
      };

      node.appendChild(script);
    }
  }, [loadedDonationForm]);

  return (
    <>
      <Box sx={{p: 2, height: '100%'}}>
        <Typography variant="h3" fontFamily="Dancing Script" textAlign="center" mt={2} ml={2}>
          Thank You For Your Support!
        </Typography>
        <Typography>
          Sophia Women's Center is a 501(c)3 non-profit medical clinic that is committed to providing professional medical services to women facing unplanned pregnancies.
          Your support enables us to offer pregnancy testing, STI testing, ultrasound exams, and options consultations to our patients—free of charge.
        </Typography>
        <br/>
        <Typography>
          Your gift to Sophia Women's Center is tax deductible. Please consult with your tax professional to learn how to claim your tax deductions for donations made to Sophia Women's Center.
        </Typography>
        <br/>
        <Typography sx={{mb: 2}}>
          <strong>Please note: </strong>If you would like to specifically give to support the new Portage County Medical Pregnancy Center, you can choose that as your <strong>Designation</strong> below!
        </Typography>
        {loadingDonationForm && <Skeleton variant="rectangular" height="100%"/>}
        <Box ref={loadDonationForm} sx={{display: loadingDonationForm ? 'none' : 'flex', justifyContent: 'center'}}/>
      </Box>
    </>
  );
};

export default Donate;
