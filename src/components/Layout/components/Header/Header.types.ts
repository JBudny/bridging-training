import { ScrollViewProps, ViewProps } from 'react-native';

export interface HeaderProps extends ViewProps {
  scrollable?: boolean;
  scrollViewOptions?: Omit<ScrollViewProps, 'children'>;
}
