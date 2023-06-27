import {StyleSheet} from 'react-native';
import {ThemeTokens} from 'react-navigation-theme';

export const getStyles = ({spacings, colors, borders}: ThemeTokens) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: spacings.regular,
      backgroundColor: colors.black,
      borderRadius: borders.roundings.regular,
    },
    text: {
      textAlign: 'center',
    },
  });
