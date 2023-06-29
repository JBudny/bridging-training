import { StyleSheet } from 'react-native';
import { ThemeTokens } from 'react-navigation-theme';

export const getStyles = ({ colors, spacings, shadows }: ThemeTokens) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.white,
      padding: spacings.medium,
      ...shadows.primary,
    },
  });
