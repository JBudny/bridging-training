import * as React from 'react';
import { Linking, View } from 'react-native';

import { useTheme } from '@react-navigation/native';
import { AppInfoModule } from 'app-info-package';

import { Layout, Link, Row, Tag, Typography } from '@components';

import { getStyles } from './AppInfoScreen.styles';
import { AppInfoScreenProps } from './AppInfoScreen.types';
import { appInfoModuleURL } from './constants';

export const AppInfoScreen: React.FC<AppInfoScreenProps> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const appBuildNumber = AppInfoModule.getAppBuildNumber();
  const appBundleId = AppInfoModule.getAppBundleId();
  const appVersion = AppInfoModule.getAppVersion();
  const openExercise = React.useCallback(
    () => Linking.openURL(appInfoModuleURL),
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
          <Tag title="Kids' stuff 👶" />
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
              As a user, I want to see the package name and version, so that I
              know if I use test or live version of the app. (AppInfo
              module&nbsp;
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
            <Typography
              variant="regular"
              size="small"
              color={theme.colors.black}>
              App Build Number: {appBuildNumber}
            </Typography>
          </Row>
          <Row gapSize="medium">
            <Typography
              variant="regular"
              size="small"
              color={theme.colors.black}>
              App Bundle Id: {appBundleId}
            </Typography>
          </Row>
          <Row gapSize="medium">
            <Typography
              variant="regular"
              size="small"
              color={theme.colors.black}>
              App Version: {appVersion}
            </Typography>
          </Row>
        </View>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
