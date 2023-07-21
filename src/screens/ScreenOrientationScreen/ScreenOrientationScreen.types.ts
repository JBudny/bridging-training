import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { AppStackParamList } from '@navigation';

export type ScreenOrientationScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'ScreenOrientation'
>;
