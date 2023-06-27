import * as React from 'react';
import {TypographyProps} from './Typography.types';
import {Text} from 'react-native';
import {getStyles} from './Typography.styles';
import {useTheme} from '@react-navigation/native';

export const Typography: React.FC<TypographyProps> = ({
  variant,
  size,
  color,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();
  if (!variant) {
    throw new Error('Typography requires a variant property');
  }
  if (!size) {
    throw new Error('Typography requires a size property');
  }
  if (!color) {
    throw new Error('Typography requires a color property');
  }

  const styles = getStyles(theme, size, variant, color);

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};
