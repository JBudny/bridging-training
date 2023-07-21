# SaveFilePickerModule

## How to use

Place `file.html` under the `<rootDir>/android/app/src/main/assets/` directory

### Use with promise

```typescript
import { saveFileWithPromise } from 'save-file-picker-package';

const FILENAME = "file.html";

const handleSaveFileWithPromise = async () => {
  try {
    const { cancelled, success, outputFilename } = await saveFileWithPromise(
      FILENAME,
    );
    if (cancelled) {
      // handle cancelled
    }
    if (success) {
      // handle success
    }
  } catch (error) {
    // handle error
  }
};
```

### Use with callback

```typescript
import { saveFileWithCallback } from 'save-file-picker-package';

const FILENAME = "file.html";

const handleSaveFileWithCallback = () =>
  saveFileWithCallback(ASSETS_FILE_PATH, (error, data) => {
    const { cancelled, success, outputFilename } = data;
    if (error) {
      // handle error
    }
    if (cancelled) {
      // handle cancelled
    }
    if (success) {
      // handle success
    }
  });
```

## Errors list

|code                   |message                            |
|-----------------------|-----------------------------------|
|UNKNOWN_ACTIVITY_RESULT|Unknown result when saving the file|
