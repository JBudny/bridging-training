import { ToastType } from 'react-native-toast-notifications';

import { SaveFileBaseError } from 'Exercises/save-file-picker-package/js';

export const isSaveFileBaseError = (obj: unknown): obj is SaveFileBaseError => {
  return (
    typeof obj === 'object' && obj !== null && 'code' in obj && 'message' in obj
  );
};
export const handleSuccess = (
  toast: ToastType,
  filename: string,
  type: 'callback' | 'promise',
) =>
  toast.show(`File "${filename}" saved successfully (${type})`, {
    type: 'success',
  });

export const handleCancelled = (
  toast: ToastType,
  type: 'callback' | 'promise',
) => toast.show(`Save file cancelled (${type})`, { type: 'warning' });

export const handleError = (
  toast: ToastType,
  code: string,
  message: string,
  type: 'callback' | 'promise',
) =>
  toast.show(
    `Save file Error (${type})
\ncode: ${code} \nmessage: ${message}`,
    {
      type: 'danger',
    },
  );
