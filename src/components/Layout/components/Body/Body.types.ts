import {ScrollViewProps, ViewProps, ViewStyle} from 'react-native';

export interface BodyProps extends ViewProps {
  scrollable?: boolean;
  scrollViewOptions?: Omit<ScrollViewProps, 'children'>;
  contentContainerStyle?: ViewStyle;
}
