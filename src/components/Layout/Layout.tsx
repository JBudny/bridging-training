import * as React from 'react';

import {LayoutProps} from './Layout.types';
import {Wrapper} from './components/Wrapper/Wrapper';
import {Header} from './components/Header/Header';
import {Body} from './components/Body/Body';

export const Layout: LayoutProps = {
  Wrapper: ({children, ...props}) => <Wrapper {...props}>{children}</Wrapper>,
  Header: ({children, ...props}) => <Header {...props}>{children}</Header>,
  Body: ({children, ...props}) => <Body {...props}>{children}</Body>,
};
