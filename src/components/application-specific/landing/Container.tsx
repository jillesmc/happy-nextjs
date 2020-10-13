import { styled, theme } from '@design/stitches.config';

const Container = styled('div', {
  width: '100vw',
  height: '100vh',
  linearGradient: `329.54deg, ${theme.colors.$blueGradientStart} 0%, ${theme.colors.$blueGradientEnd} 100%`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export default Container;
