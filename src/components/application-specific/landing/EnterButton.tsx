import { styled } from '@design/stitches.config';
import { FiArrowRight } from 'react-icons/fi';

const EnterLink = styled('a', {
  position: 'absolute',
  right: '0',
  bottom: '0',

  width: '80px',
  height: '80px',

  background: '$yellow',
  borderRadius: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'background-color 0.2s',
  ':hover': {
    background: '$blueLight',
  },
});

const EnterButton: React.FC = (props): JSX.Element => {
  return (
    <EnterLink {...props}>
      <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
    </EnterLink>
  );
};

export default EnterButton;
