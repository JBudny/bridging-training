import {StyleSheet} from 'react-native';
import {ThemeTokens} from 'react-navigation-theme';

export const getStyles = ({spacings}: ThemeTokens) =>
  StyleSheet.create({
    body: {
      rowGap: spacings.medium,
    },
  });
