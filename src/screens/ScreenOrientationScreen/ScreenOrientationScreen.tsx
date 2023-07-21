import * as React from 'react';
import { Linking, View } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { Layout, Link, Row, Tag, Typography } from '@components';

import { ScreenOrientationModuleURL } from './constants';
import { getStyles } from './ScreenOrientationScreen.styles';
import { ScreenOrientationScreenProps } from './ScreenOrientationScreen.types';

export const ScreenOrientationScreen: React.FC<
  ScreenOrientationScreenProps
> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const openExercise = React.useCallback(
    () => Linking.openURL(ScreenOrientationModuleURL),
    [],
  );

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
          <Tag title="May sound difficult, but you'll manage it 🫡" />
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
              As a user, I want to detect when my device is in landscape or
              portrait orientation. (ScreenOrientation modulee&nbsp;
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
        </View>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
