import {Skeleton, styled} from '@mui/material';
import {useState} from "react";

const Img = styled('img')({
  maxWidth: "min(1024px, 50vw)",
  maxHeight: "70vh"
});

const Image = props => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Skeleton><Img/></Skeleton>}
      <Img
        {...props}
        sx={{...props.sx, display: loading ? 'none' : (props.sx?.display ?? 'block')}}
        onLoad={e => {
          props.onLoad?.(e);
          setLoading(false);
        }}
      />
    </>
  );
};

export default Image;
