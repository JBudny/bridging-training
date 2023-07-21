import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

interface StackError {
  class: string;
  file: string;
  lineNumber: number;
  methodName: string;
}

export interface SaveFileBaseError {
  code: string;
  message: string;
}

export interface SaveFilePromiseError extends SaveFileBaseError {
  nativeStackAndroid?: StackError[];
}

export interface SaveFileResult {
  success: boolean;
  cancelled: boolean;
  outputFilename: string;
}

export interface Spec extends TurboModule {
  saveFileWithCallback(
    filename: string,
    callback: (error: SaveFileBaseError | null, result: SaveFileResult) => void,
  ): void;
  saveFileWithPromise(filename: string): Promise<SaveFileResult>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SaveFilePickerModule');
