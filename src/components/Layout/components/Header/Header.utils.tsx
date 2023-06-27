import * as React from 'react';
import {DefaultHeader} from './components/DefaultHeader/DefaultHeader';

import {ScrollView} from 'react-native';
import {HeaderProps} from './Header.types';

export const renderDefaultHeader: React.FC<HeaderProps> = ({children}) =>
  typeof children === 'string' && <DefaultHeader>{children}</DefaultHeader>;

export const renderCustomHeader: React.FC<HeaderProps> = ({
  scrollable,
  scrollViewOptions,
  children,
}) =>
  scrollable ? (
    <ScrollView {...scrollViewOptions}>{children}</ScrollView>
  ) : (
    children
  );
