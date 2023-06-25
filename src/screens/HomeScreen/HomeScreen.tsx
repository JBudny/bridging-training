import React from 'react';
import {styles} from './HomeScreen.styles';
import {ScreenWrapper} from '@components';
import {HomeScreenProps} from './HomeScreen.types';
import {Text} from 'react-native';

export const HomeScreen: React.FC<HomeScreenProps> = () => (
  <ScreenWrapper style={styles.container}>
    <Text>Hello World</Text>
  </ScreenWrapper>
);
