import NativeSaveFilePickerModule from './NativeSaveFilePickerModule';

export type {
  SaveFileBaseError,
  SaveFilePromiseError,
  SaveFileResult,
} from './NativeSaveFilePickerModule';

export const { saveFileWithCallback, saveFileWithPromise } =
  NativeSaveFilePickerModule;
