import * as React from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { Typography } from '@components';

import { getStyles } from './DefaultHeader.styles';

export const DefaultHeader: React.FC<ViewProps> = ({ children }) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Typography variant="medium" size="medium" color={theme.colors.blue}>
        {children}
      </Typography>
    </View>
  );
};
