import AddButton from '@app/app/dash/AddButton';
import Container from '@app/app/dash/Container';
import SidePanel from '@app/app/dash/SidePanel';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { styled } from '@design/stitches.config';

const Map = dynamic(() => import('@app/app/dash/Map'), {
  ssr: false,
});

const MapContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

export const Home = (): JSX.Element => (
  <Container>
    <SidePanel />

    <MapContainer>
      <Map />
    </MapContainer>

    <Link href="/" passHref>
      <AddButton />
    </Link>
  </Container>
);

export default Home;
