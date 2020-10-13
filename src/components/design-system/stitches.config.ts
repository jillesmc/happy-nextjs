import { createStyled } from '@stitches/react';

export const theme = {
  colors: {
    $blue: '#15C3D6',
    $blueLightHover: '#17d6eb',
    $blueLight: '#96FEFF',
    $blueLow: '#D1EDF2',
    $blueDark: '#0089A5',
    $blueGradientStart: '#29b6d1',
    $blueGradientEnd: '#00c7c7',
    $yellow: '#FFD666',
    $green: '#37C77F',
    $greenLow: '#EDFFF6',
    $red: '#FF669D',
    $redLow: '#FFE4EE',
  },
};

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {},
  utils: {
    br: (_config) => (value) => ({
      borderRadius: value,
    }),
    m: (_config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (_config) => (value) => ({
      marginTop: value,
    }),
    mr: (_config) => (value) => ({
      marginRight: value,
    }),
    mb: (_config) => (value) => ({
      marginBottom: value,
    }),
    ml: (_config) => (value) => ({
      marginLeft: value,
    }),
    mx: (_config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (_config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    size: (_config) => (value) => ({
      width: value,
      height: value,
    }),
    linearGradient: (_config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
});
