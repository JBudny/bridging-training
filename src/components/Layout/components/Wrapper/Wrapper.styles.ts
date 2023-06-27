import {StyleSheet} from 'react-native';
import {ThemeTokens} from 'react-navigation-theme';

export const getStyles = (theme: ThemeTokens) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
  });
