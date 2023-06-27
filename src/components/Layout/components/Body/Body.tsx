import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {getStyles} from './Body.styles';
import {BodyProps} from './Body.types';
import {useTheme} from '@react-navigation/native';

export const Body: React.FC<BodyProps> = ({
  children,
  style,
  contentContainerStyle,
  scrollable,
  scrollViewOptions,
  ...props
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, style]} {...props}>
      {scrollable ? (
        <ScrollView {...scrollViewOptions}>{children}</ScrollView>
      ) : (
        <View style={[styles.content, contentContainerStyle]}>{children}</View>
      )}
    </View>
  );
};
