import {useEffect, useMemo, useRef, useState} from 'react';
import {Dialog, DialogContent, DialogTitle, IconButton, Skeleton} from '@mui/material';
import {Close as CloseIcon} from '@mui/icons-material';

const Subscribe = ({open, onClose}) => {
  const [loading, setLoading] = useState(true);

  const cancel = useRef(false);
  useEffect(() => {
    return () => {
      cancel.current = true;
    }
  }, []);

  const dmcWidget = useMemo(() => {
    return (
      <iframe
        title="Dial My Calls Widget"
        src="https://www.dialmycalls.com/opt/byb"
        width="100%"
        height="500px"
        frameBorder={0}
        style={{display: loading ? 'none' : 'inherit'}}
        onLoad={() => {
          setTimeout(() => {
            if (!cancel.current) {
              setLoading(false);
            }
          }, 300);
        }}
      />
    )
  }, [loading]);

  return (
    <Dialog open={open} fullWidth>
      <DialogTitle>
        <IconButton onClick={onClose}>
          <CloseIcon/>
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {loading && <Skeleton variant="rectangular" height="450px"/>}
        {dmcWidget}
      </DialogContent>
    </Dialog>
  );
};

export default Subscribe;
