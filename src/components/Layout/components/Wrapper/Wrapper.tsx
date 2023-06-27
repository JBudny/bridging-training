import * as React from 'react';
import {getStyles} from './Wrapper.styles';
import type {SafeAreaViewProps} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

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
