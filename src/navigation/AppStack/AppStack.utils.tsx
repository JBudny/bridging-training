import * as React from 'react';
import {Typography} from '@components';
import {ThemeTokens} from 'react-navigation-theme';

export const renderHeaderTitle = (children: string, theme: ThemeTokens) => (
  <Typography variant="medium" size="medium" color={theme.colors.white}>
    {children}
  </Typography>
);
