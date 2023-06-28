import * as React from 'react';
import { View } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { getStyles } from './Row.styles';
import { RowProps } from './Row.types';

export const Row: React.FC<RowProps> = ({
  children,
  gapSize,
  style,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme, gapSize);

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};
