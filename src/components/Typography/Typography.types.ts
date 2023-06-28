import type { TextProps } from 'react-native';

export type TypographySize = 'medium' | 'small';

export type TypographyVariant = 'regular' | 'medium';

export interface TypographyProps extends TextProps {
  variant: TypographyVariant;
  size: TypographySize;
  color: string;
}
