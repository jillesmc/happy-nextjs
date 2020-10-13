import { Heading2, Paragraph } from '@design/components/typography';
import mapMarkerImg from 'static/svg/MapMarker.svg';

const Header: React.FC = (): JSX.Element => {
  return (
    <header>
      <img src={mapMarkerImg} alt="Happy" />
      <Heading2>Escolha um orfanato no mapa</Heading2>
      <Paragraph>Muitas crianças estão esperando a sua visita :] </Paragraph>
    </header>
  );
};

export default Header;
