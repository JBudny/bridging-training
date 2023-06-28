import { ThemeTokens } from 'react-navigation-theme';

import { DefaultTheme } from '@react-navigation/native';

export const theme: ThemeTokens = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    blue: '#2488df',
    white: '#f0eff4',
    black: '#383f51',
  },
  fonts: {
    sizes: {
      medium: 18,
      small: 16,
    },
    variants: {
      medium: {
        fontWeight: '500',
      },
      regular: {
        fontWeight: '400',
      },
    },
  },
  spacings: {
    regular: 10,
    medium: 15,
  },
  shadows: {
    primary: {
      elevation: 4,
    },
  },
  borders: {
    roundings: {
      regular: 10,
    },
    widths: {
      regular: 2,
    },
  },
};
