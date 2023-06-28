import { PressableProps, ViewStyle } from 'react-native';

export interface OutlineBtnProps extends PressableProps {
  style?: ViewStyle;
  title: string;
}
