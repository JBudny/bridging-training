import React from 'react';
import {View} from 'react-native';
import {getStyles} from './Tag.styles';
import {TagProps} from './Tag.types';
import {Typography} from '@components';
import {useTheme} from '@react-navigation/native';

export const Tag: React.FC<TagProps> = ({title}) => {
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
