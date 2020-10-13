import { styled } from '@design/stitches.config';

export const City = styled('strong', {
  fontWeight: 800,
  fontSize: '18px',
  lineHeight: '28px',

  variants: {
    size: {
      big: {
        fontSize: '24px',
        lineHeight: '34px',
      },
    },
  },
});

export const State = styled('span', {
  fontSize: '18px',
  lineHeight: '28px',

  variants: {
    size: {
      big: {
        fontSize: '24px',
        lineHeight: '34px',
      },
    },
  },
});
