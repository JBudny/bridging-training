import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from '@react-navigation/native';
import {AppStackParamList} from './AppStack.types';
import {HomeScreen} from '@screens';
import {AppStackRoutes} from './AppStack.routes';

const {Navigator, Screen} = createNativeStackNavigator<AppStackParamList>();
const {Home} = AppStackRoutes;

export const AppStack: React.FC = () => {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName={Home}
      screenOptions={{
        statusBarColor: theme.colors.blue,
        navigationBarColor: theme.colors.blue,
      }}>
      <Screen
        name={Home}
        component={HomeScreen}
        options={{
          title: 'Bridging Tutorial',
          headerStyle: {backgroundColor: theme.colors.blue},
          headerTintColor: theme.colors.white,
        }}
      />
    </Navigator>
  );
};
