import * as React from 'react';
import {Pressable} from 'react-native';
import {getStyles} from './OutlineBtn.styles';
import {OutlineBtnProps} from './OutlineBtn.types';
import {Typography} from '@components';
import {useTheme} from '@react-navigation/native';

export const OutlineBtn: React.FC<OutlineBtnProps> = ({
  title,
  onPress,
  style,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
      {...props}>
      {({pressed}) => (
        <Typography
          variant="regular"
          size="small"
          color={(pressed && theme.colors.white) || theme.colors.blue}>
          {title}
        </Typography>
      )}
    </Pressable>
  );
};
