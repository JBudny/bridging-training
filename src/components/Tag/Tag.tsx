import React from 'react';
import { View } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { Typography } from '@components';

import { getStyles } from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag: React.FC<TagProps> = ({ title }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Typography
        variant="regular"
        size="small"
        color={theme.colors.white}
        style={styles.text}>
        {title}
      </Typography>
    </View>
  );
};
