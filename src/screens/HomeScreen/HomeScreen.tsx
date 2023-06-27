import * as React from 'react';
import {Layout, Typography} from '@components';
import {HomeScreenProps} from './HomeScreen.types';
import {useTheme} from '@react-navigation/native';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {colors} = useTheme();

  return (
    <Layout.Wrapper>
      <Layout.Header>Exercises</Layout.Header>
      <Layout.Body
        scrollable
        scrollViewOptions={{
          showsVerticalScrollIndicator: false,
        }}>
        <Typography size="medium" variant="medium" color={colors.blue}>
          Hello World
        </Typography>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
