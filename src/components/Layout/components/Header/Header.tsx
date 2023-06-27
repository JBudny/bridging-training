import * as React from 'react';
import {View} from 'react-native';
import {HeaderProps} from './Header.types';
import {renderCustomHeader, renderDefaultHeader} from './Header.utils';

export const Header: React.FC<HeaderProps> = ({
  children,
  style,
  scrollable,
  scrollViewOptions,
  ...props
}) => (
  <View style={style} {...props}>
    {renderDefaultHeader({children}) ||
      renderCustomHeader({scrollable, scrollViewOptions, style, children})}
  </View>
);
