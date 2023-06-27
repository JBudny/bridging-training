import React from 'react';
import {Layout, OutlineBtn} from '@components';
import {HomeScreenProps} from './HomeScreen.types';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {getStyles} from './HomeScreen.styles';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Layout.Wrapper>
      <Layout.Header>Excercises</Layout.Header>
      <Layout.Body
        scrollable
        scrollViewOptions={{
          showsVerticalScrollIndicator: false,
        }}>
        <View style={styles.body}>
          <OutlineBtn title="Exercise 1" />
          <OutlineBtn title="Exercise 2" />
          <OutlineBtn title="Exercise 3" />
        </View>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
