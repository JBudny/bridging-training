import { StyleSheet } from 'react-native';
import { ThemeTokens } from 'react-navigation-theme';

export const getStyles = ({ colors, spacings, fonts, shadows }: ThemeTokens) =>
  StyleSheet.create({
    header: {
      backgroundColor: colors.white,
      padding: spacings.medium,
      ...shadows.primary,
    },
    rtnCenteredText: {
      height: fonts.sizes.medium,
    },
    bodyContent: {
      rowGap: spacings.medium,
    },
  });
