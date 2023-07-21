import * as React from 'react';

import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  AppInfoScreen,
  HomeScreen,
  RTNCenteredTextScreen,
  SaveFilePickerScreen,
  ScreenOrientationScreen,
} from '@screens';

import { AppStackRoutes } from './AppStack.routes';
import { AppStackParamList } from './AppStack.types';
import { renderHeaderTitle } from './AppStack.utils';

const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();
const { Home, RTNCenteredText, AppInfo, SaveFilePicker, ScreenOrientation } =
  AppStackRoutes;

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
          title: 'Bridging training',
          headerTitle: ({ children }) => renderHeaderTitle(children, theme),
          headerStyle: { backgroundColor: theme.colors.blue },
          headerTintColor: theme.colors.white,
        }}
      />
      <Screen
        name={RTNCenteredText}
        component={RTNCenteredTextScreen}
        options={{
          headerTitle: ({ children }) => renderHeaderTitle(children, theme),
          headerStyle: { backgroundColor: theme.colors.blue },
          headerTintColor: theme.colors.white,
        }}
      />
      <Screen
        name={AppInfo}
        component={AppInfoScreen}
        options={{
          headerTitle: ({ children }) => renderHeaderTitle(children, theme),
          headerStyle: { backgroundColor: theme.colors.blue },
          headerTintColor: theme.colors.white,
        }}
      />
      <Screen
        name={SaveFilePicker}
        component={SaveFilePickerScreen}
        options={{
          headerTitle: ({ children }) => renderHeaderTitle(children, theme),
          headerStyle: { backgroundColor: theme.colors.blue },
          headerTintColor: theme.colors.white,
        }}
      />
      <Screen
        name={ScreenOrientation}
        component={ScreenOrientationScreen}
        options={{
          headerTitle: ({ children }) => renderHeaderTitle(children, theme),
          headerStyle: { backgroundColor: theme.colors.blue },
          headerTintColor: theme.colors.white,
        }}
      />
    </Navigator>
  );
};
