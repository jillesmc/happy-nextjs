import { styled } from '@design/stitches.config';

export const Heading1 = styled('h1', {
  fontSize: '76px',
  fontWeight: 900,
  lineHeight: '70px',
});

export const Heading2 = styled('h2', {
  fontSize: '40px',
  fontWeight: 800,
  lineHeight: '42px',
  marginTop: '64px',
});

export const Paragraph = styled('p', {
  lineHeight: '28px',
  marginTop: '24px',

  variants: {
    size: {
      big: {
        marginTop: '40px',
        fontSize: '24px',
        lineHeight: '34px',
      },
    },
  },
});
