import {StyleSheet} from 'react-native';
import {ThemeTokens} from 'react-navigation-theme';

export const getStyles = (theme: ThemeTokens) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacings.medium,
      paddingVertical: theme.spacings.medium,
      backgroundColor: theme.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      ...theme.shadows.primary,
    },
  });
