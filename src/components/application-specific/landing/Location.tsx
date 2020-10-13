import { City, State } from '@app/location/LocationDetails';
import { css } from '@design/stitches.config';

const locationBlock = css({
  position: 'absolute',
  right: '0',
  top: '0',

  fontSize: '24px',
  lineHeight: '34px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'right',
});

const Location: React.FC = (): JSX.Element => {
  return (
    <div className={locationBlock}>
      <City size="big">Curitiba</City>
      <State size="big">Paraná</State>
    </div>
  );
};

export default Location;
