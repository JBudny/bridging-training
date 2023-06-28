import { StyleSheet } from 'react-native';
import { ThemeTokens } from 'react-navigation-theme';

import { GapSize } from './Row.types';

export const getStyles = ({ spacings }: ThemeTokens, gapSize: GapSize) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      columnGap:
        (gapSize === 'small' && spacings.regular) ||
        (gapSize === 'medium' && spacings.medium) ||
        0,
    },
  });
