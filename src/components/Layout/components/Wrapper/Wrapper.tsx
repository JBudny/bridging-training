import * as React from 'react';
import { View } from 'react-native';
import type { SafeAreaViewProps } from 'react-native-safe-area-context';

import { useTheme } from '@react-navigation/native';

import { getStyles } from './Wrapper.styles';

export const Wrapper: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};
