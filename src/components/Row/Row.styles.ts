import {StyleSheet} from 'react-native';
import {GapSize} from './Row.types';
import {ThemeTokens} from 'react-navigation-theme';

export const getStyles = ({spacings}: ThemeTokens, gapSize: GapSize) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      columnGap:
        (gapSize === 'small' && spacings.regular) ||
        (gapSize === 'medium' && spacings.medium) ||
        0,
    },
  });
