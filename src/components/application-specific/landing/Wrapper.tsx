import { styled } from '@design/stitches.config';
import Landing from 'static/svg/Landing.svg';

const Wrapper = styled('div', {
  position: 'relative',
  width: '100%',
  maxWidth: '1100px',
  height: '100%',
  maxHeight: '680px',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: `url(${Landing}) no-repeat 80% center`,
});

export default Wrapper;
