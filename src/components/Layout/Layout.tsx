import * as React from 'react';

import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import { Wrapper } from './components/Wrapper/Wrapper';
import { LayoutProps } from './Layout.types';

export const Layout: LayoutProps = {
  Wrapper: ({ children, ...props }) => <Wrapper {...props}>{children}</Wrapper>,
  Header: ({ children, ...props }) => <Header {...props}>{children}</Header>,
  Body: ({ children, ...props }) => <Body {...props}>{children}</Body>,
};
