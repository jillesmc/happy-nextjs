import { element as Logo } from 'static/svg/Logo.svg';

import Link from 'next/link';
import Container from '@app/landing/Container';
import Wrapper from '@app/landing/Wrapper';
import Main from '@app/landing/Main';
import Location from '@app/landing/Location';
import EnterButton from '@app/landing/EnterButton';

export const Home = (): JSX.Element => (
  <Container>
    <Wrapper>
      <Logo />

      <Main />

      <Location />

      <Link href="/app/dash" passHref>
        <EnterButton />
      </Link>
    </Wrapper>
  </Container>
);

export default Home;
