import * as React from 'react';
import { Linking, View } from 'react-native';

import { useTheme } from '@react-navigation/native';
import { RTNCenteredTextNativeComponent } from 'Exercises/rtn-centered-text/js';

import { Layout, Link, Row, Tag, Typography } from '@components';

import { fabricNativeComponentURL } from './constants';
import { getStyles } from './RTNCenteredTextScreen.styles';
import { RTNCenteredTextScreenProps } from './RTNCenteredTextScreen.types';

export const RTNCenteredTextScreen: React.FC<
  RTNCenteredTextScreenProps
> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const openDocs = React.useCallback(
    () => Linking.openURL(fabricNativeComponentURL),
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
          <Tag title="Fabric Native Component" />
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
              As a user, I want to see the centered "Hello World!" text. (Fabric
              Native Componentse&nbsp;
              <Link size="small" onPress={openDocs}>
                guide
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
          <RTNCenteredTextNativeComponent
            text="Hello World!"
            style={styles.rtnCenteredText}
          />
        </View>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
