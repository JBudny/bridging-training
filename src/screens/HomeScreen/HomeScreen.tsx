import * as React from 'react';
import { View } from 'react-native';

import {
  NavigationProp,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import { AppStackRoutes } from 'src/navigation/AppStack/AppStack.routes';

import { Layout, OutlineBtn, Row } from '@components';
import { AppStackParamList } from '@navigation';

import { getStyles } from './HomeScreen.styles';
import { HomeScreenProps } from './HomeScreen.types';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const { navigate } = useNavigation<NavigationProp<AppStackParamList>>();

  const openRTNCenteredTextScreen = () =>
    navigate(AppStackRoutes.RTNCenteredText);
  const openAppInfoScreen = () => navigate(AppStackRoutes.AppInfo);
  const openSaveFilePickerScreen = () =>
    navigate(AppStackRoutes.SaveFilePicker);

  return (
    <Layout.Wrapper>
      <Layout.Header>Excercises</Layout.Header>
      <Layout.Body
        scrollable
        scrollViewOptions={{
          showsVerticalScrollIndicator: false,
        }}>
        <View style={styles.bodyContent}>
          <Row gapSize="medium">
            <OutlineBtn
              onPress={openRTNCenteredTextScreen}
              title="RTNCenteredText"
            />
            <OutlineBtn onPress={openAppInfoScreen} title="AppInfo" />
          </Row>
          <Row gapSize="medium">
            <OutlineBtn
              onPress={openSaveFilePickerScreen}
              title="SaveFilePicker"
            />
          </Row>
        </View>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
