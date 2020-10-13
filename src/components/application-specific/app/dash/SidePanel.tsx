import { styled, theme } from '@design/stitches.config';
import Footer from './aside/Footer';
import Header from './aside/Header';

const Panel = styled('aside', {
  width: '440px',
  linearGradient: `329.54deg, ${theme.colors.$blueGradientStart} 0%, ${theme.colors.$blueGradientEnd} 100%`,
  padding: '80px',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const SidePanel: React.FC = (): JSX.Element => {
  return (
    <Panel>
      <Header />
      <Footer />
    </Panel>
  );
};

export default SidePanel;
