import * as React from 'react';
import {styles} from './HomeScreen.styles';
import {ScreenWrapper, Typography} from '@components';
import {HomeScreenProps} from './HomeScreen.types';
import {useTheme} from '@react-navigation/native';

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {colors} = useTheme();

  return (
    <ScreenWrapper style={styles.container}>
      <Typography size="medium" variant="medium" color={colors.blue}>
        Hello World
      </Typography>
    </ScreenWrapper>
  );
};
