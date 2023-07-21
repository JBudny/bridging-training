import * as React from 'react';
import { Linking, View } from 'react-native';
import { useToast } from 'react-native-toast-notifications';

import { useTheme } from '@react-navigation/native';
import {
  saveFileWithCallback,
  saveFileWithPromise,
} from 'save-file-picker-package';

import { Layout, Link, OutlineBtn, Row, Tag, Typography } from '@components';

import { ASSETS_FILE_PATH, saveFilePickerModuleURL } from './constants';
import { getStyles } from './SaveFilePickerScreen.styles';
import { SaveFilePickerScreenProps } from './SaveFilePickerScreen.types';
import {
  handleCancelled,
  handleError,
  handleSuccess,
  isSaveFileBaseError,
} from './utils';

export const SaveFilePickerScreen: React.FC<SaveFilePickerScreenProps> = () => {
  const theme = useTheme();
  const toast = useToast();
  const styles = getStyles(theme);
  const openExercise = React.useCallback(
    () => Linking.openURL(saveFilePickerModuleURL),
    [],
  );

  const handleSaveFileWithCallback = () =>
    saveFileWithCallback(ASSETS_FILE_PATH, (error, data) => {
      const { cancelled, success, outputFilename } = data;
      if (error) {
        const { code, message } = error;
        handleError(toast, code, message, 'callback');
      }
      if (cancelled) handleCancelled(toast, 'callback');
      if (success) handleSuccess(toast, outputFilename, 'callback');
    });

  const handleSaveFileWithPromise = async () => {
    try {
      const { cancelled, success, outputFilename } = await saveFileWithPromise(
        ASSETS_FILE_PATH,
      );
      if (cancelled) handleCancelled(toast, 'promise');
      if (success) handleSuccess(toast, outputFilename, 'promise');
    } catch (error) {
      if (isSaveFileBaseError(error))
        handleError(toast, error.code, error.message, 'promise');
    }
  };

  return (
    <Layout.Wrapper>
      <Layout.Header
        scrollable
        scrollViewOptions={{
          horizontal: true,
          showsHorizontalScrollIndicator: false,
        }}
        style={styles.header}>
        <Row gapSize="small">
          <Tag title="A piece of cake 🍰" />
          <Tag title="Turbo Native Module" />
          <Tag title="Android" />
        </Row>
      </Layout.Header>
      <Layout.Body>
        <View style={styles.bodyContent}>
          <Row gapSize="medium">
            <Typography
              variant="medium"
              size="medium"
              color={theme.colors.black}>
              Task description
            </Typography>
          </Row>
          <Row gapSize="medium">
            <Typography
              variant="regular"
              size="small"
              color={theme.colors.black}>
              As a user, I want to use a save the file on my device.
              (SaveFilePicker modulee&nbsp;
              <Link size="small" onPress={openExercise}>
                intro
              </Link>
              )
            </Typography>
          </Row>
          <Row gapSize="medium">
            <Typography
              variant="medium"
              size="medium"
              color={theme.colors.black}>
              Result
            </Typography>
          </Row>
          <Row gapSize="medium">
            <OutlineBtn
              title="save file with promise"
              onPress={handleSaveFileWithPromise}
            />
          </Row>
          <Row gapSize="medium">
            <OutlineBtn
              title="save file with callback"
              onPress={handleSaveFileWithCallback}
            />
          </Row>
        </View>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
