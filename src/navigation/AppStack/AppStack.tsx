import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from './AppStack.types';
import {HomeScreen} from '@screens';
import {AppStackRoutes} from './AppStack.routes';

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();
const {Home} = AppStackRoutes;

export const AppStack: React.FC = () => (
  <Navigator initialRouteName={Home}>
    <Screen name={Home} component={HomeScreen} />
  </Navigator>
);
