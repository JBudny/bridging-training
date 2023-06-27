import {DefaultTheme} from '@react-navigation/native';
import {ThemeTokens} from 'react-navigation-theme';

export const theme: ThemeTokens = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    blue: '#2488df',
    white: '#f0eff4',
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
