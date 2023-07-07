import * as React from 'react';

import { useTheme } from '@react-navigation/native';

import { Layout, Row, Tag } from '@components';

import { getStyles } from './AppInfoScreen.styles';
import { AppInfoScreenProps } from './AppInfoScreen.types';

export const AppInfoScreen: React.FC<AppInfoScreenProps> = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

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
        </Row>
      </Layout.Header>
      <Layout.Body />
    </Layout.Wrapper>
  );
};
