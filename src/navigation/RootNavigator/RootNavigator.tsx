import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from '@navigation';
import {theme} from '@themes';

export const RootNavigator: React.FC = () => (
  <NavigationContainer theme={theme}>
    <AppStack />
  </NavigationContainer>
);
