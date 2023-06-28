import { TextStyle, ViewStyle } from 'react-native';

import { Theme } from '@react-navigation/native';

interface FontVariant {
  fontWeight: TextStyle['fontWeight'];
}

interface ThemeTokens extends Theme {
  colors: Theme['colors'] & {
    blue: string;
    white: string;
    black: string;
  };
  spacings: {
    regular: number;
    medium: number;
  };
  fonts: {
    variants: {
      regular: FontVariant;
      medium: FontVariant;
    };
    sizes: {
      small: number;
      medium: number;
    };
  };
  shadows: {
    primary: {
      elevation: ViewStyle['elevation'];
    };
  };
  borders: {
    roundings: {
      regular: number;
    };
    widths: {
      regular: number;
    };
  };
}

declare module '@react-navigation/native' {
  export function useTheme(): ThemeTokens;
}
