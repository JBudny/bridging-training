import { StyleSheet } from 'react-native';
import { ThemeTokens } from 'react-navigation-theme';

export const getStyles = (theme: ThemeTokens) =>
  StyleSheet.create({
    container: {
      padding: theme.spacings.medium,
      flex: 1,
    },
    content: {
      flex: 1,
    },
  });
