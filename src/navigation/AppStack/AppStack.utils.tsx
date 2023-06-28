import * as React from 'react';
import { ThemeTokens } from 'react-navigation-theme';

import { Typography } from '@components';

export const renderHeaderTitle = (children: string, theme: ThemeTokens) => (
  <Typography variant="medium" size="medium" color={theme.colors.white}>
    {children}
  </Typography>
);
