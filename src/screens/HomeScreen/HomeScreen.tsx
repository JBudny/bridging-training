import React from 'react';
import {Layout, Row, OutlineBtn} from '@components';
import {HomeScreenProps} from './HomeScreen.types';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {getStyles} from './HomeScreen.styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '@navigation';
import {AppStackRoutes} from 'src/navigation/AppStack/AppStack.routes';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const {navigate} = useNavigation<NavigationProp<AppStackParamList>>();

  const openRTNCenteredTextScreen = () =>
    navigate(AppStackRoutes.RTNCenteredText);

  return (
    <Layout.Wrapper>
      <Layout.Header>Excercises</Layout.Header>
      <Layout.Body
        scrollable
        scrollViewOptions={{
          showsVerticalScrollIndicator: false,
        }}>
        <View style={styles.body}>
          <Row gapSize="medium">
            <OutlineBtn
              onPress={openRTNCenteredTextScreen}
              title="RTNCenteredText1"
            />
          </Row>
        </View>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
