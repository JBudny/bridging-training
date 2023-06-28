import * as React from 'react';
import { ScrollView } from 'react-native';

import { DefaultHeader } from './components/DefaultHeader/DefaultHeader';
import { HeaderProps } from './Header.types';

export const renderDefaultHeader = (children: React.ReactNode) =>
  typeof children === 'string' && <DefaultHeader>{children}</DefaultHeader>;

export const renderCustomHeader = ({
  scrollable,
  scrollViewOptions,
  children,
}: HeaderProps) =>
  (scrollable && <ScrollView {...scrollViewOptions}>{children}</ScrollView>) ||
  children;
