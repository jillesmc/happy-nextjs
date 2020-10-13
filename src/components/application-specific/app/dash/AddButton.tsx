import { styled } from '@design/stitches.config';
import { FiPlus } from 'react-icons/fi';

const Button = styled('a', {
  position: 'absolute',
  right: '40px',
  bottom: '40px',
  width: '64px',
  height: '64px',
  background: '$blue',
  borderRadius: '20px',

  zIndex: '10',
  display: 'flex',

  justifyContent: 'center',
  alignItems: 'center',

  transition: 'background-color 0.2s',
  ':hover': {
    background: '$blueLightHover',
  },
});

const AddButton: React.FC = (props): JSX.Element => {
  return (
    <Button {...props}>
      <FiPlus size={32} color="#FFF" />
    </Button>
  );
};

export default AddButton;
