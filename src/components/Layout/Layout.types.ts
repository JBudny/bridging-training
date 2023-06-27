import {SafeAreaViewProps} from 'react-native-safe-area-context';
import {HeaderProps} from './components/Header/Header.types';
import {BodyProps} from './components/Body/Body.types';

export interface LayoutProps {
  Wrapper: React.FC<SafeAreaViewProps>;
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
}
