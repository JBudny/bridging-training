import * as React from 'react';
import { ToastProvider } from 'react-native-toast-notifications';

import { RootNavigator } from '@navigation';

export const App: React.FC = () => (
  <ToastProvider offsetBottom={40}>
    <RootNavigator />
  </ToastProvider>
);
