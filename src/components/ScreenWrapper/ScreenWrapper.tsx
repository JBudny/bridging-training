import React from 'react';
import {View} from 'react-native';

import {styles} from './ScreenWrapper.styles';
import type {ScreenWrapperProps} from './ScreenWrapper.types';
import {SafeAreaView} from 'react-native-safe-area-context';

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <SafeAreaView style={styles.container} {...props}>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};
