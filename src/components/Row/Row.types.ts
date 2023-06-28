import { ViewProps } from 'react-native';

export type GapSize = 'small' | 'medium';

export interface RowProps extends ViewProps {
  gapSize: GapSize;
}
