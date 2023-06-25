import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from '@navigation';

export const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <AppStack />
  </NavigationContainer>
);
