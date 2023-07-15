import * as React from 'react';

import { useTheme } from '@react-navigation/native';

import { Typography } from '../../Typography';
import { getStyles } from './Link.styles';
import { LinkProps } from './Link.types';

export const Link: React.FC<LinkProps> = ({
  style,
  children,
  size,
  ...props
}) => {
  const styles = getStyles();
  const { colors } = useTheme();

  return (
    <Typography
      variant="medium"
      size={size}
      color={colors.blue}
      style={[styles.container, style]}
      {...props}>
      {children}
    </Typography>
  );
};
