import { City, State } from '@app/location/LocationDetails';
import { css } from '@design/stitches.config';

const footerBlock = css({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '24px',
});

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={footerBlock}>
      <City>Curitiba</City>
      <State>Paraná</State>
    </footer>
  );
};

export default Footer;
