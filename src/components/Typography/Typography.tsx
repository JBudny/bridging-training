/* eslint-disable no-restricted-imports */
// This is the only place where Text component can be used.
import * as React from 'react';
import { Text } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { getStyles } from './Typography.styles';
import { TypographyProps } from './Typography.types';

export const Typography: React.FC<TypographyProps> = ({
  variant,
  size,
  color,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();
  if (!variant) throw new Error('Typography requires a variant property');

  if (!size) throw new Error('Typography requires a size property');

  if (!color) throw new Error('Typography requires a color property');

  const styles = getStyles(theme, size, variant, color);

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};
