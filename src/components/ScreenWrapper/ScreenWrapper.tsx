import React from 'react';
import {View} from 'react-native';

import type {ScreenWrapperProps} from './ScreenWrapper.types';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getStyles} from './ScreenWrapper.styles';
import {useTheme} from '@react-navigation/native';

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container} {...props}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};
