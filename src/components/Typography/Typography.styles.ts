import { StyleSheet } from 'react-native';
import { ThemeTokens } from 'react-navigation-theme';

import { TypographySize, TypographyVariant } from './Typography.types';

export const getTypographySizes = (theme: ThemeTokens) =>
  new Map([
    ['medium', theme.fonts.sizes.medium],
    ['small', theme.fonts.sizes.small],
  ]);

export const getTypographyVariants = (theme: ThemeTokens) =>
  new Map([
    ['regular', theme.fonts.variants.regular],
    ['medium', theme.fonts.variants.medium],
  ]);

export const getStyles = (
  theme: ThemeTokens,
  size: TypographySize,
  variant: TypographyVariant,
  color: string,
) =>
  StyleSheet.create({
    text: {
      fontSize: getTypographySizes(theme).get(size),
      color: color,
      ...getTypographyVariants(theme).get(variant),
    },
  });
