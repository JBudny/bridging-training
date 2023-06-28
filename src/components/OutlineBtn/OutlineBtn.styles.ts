import { StyleSheet } from 'react-native';
import { ThemeTokens } from 'react-navigation-theme';

export const getStyles = ({ spacings, borders, colors }: ThemeTokens) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: spacings.medium,
      borderRadius: borders.roundings.regular,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white,
      borderColor: colors.blue,
      borderWidth: borders.widths.regular,
    },
    pressed: {
      backgroundColor: colors.blue,
    },
  });
