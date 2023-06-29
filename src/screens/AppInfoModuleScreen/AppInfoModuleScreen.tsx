import * as React from 'react';

import { useTheme } from '@react-navigation/native';

import { Layout, Row, Tag } from '@components';

import { getStyles } from './AppInfoModuleScreen.styles';
import { AppInfoModuleScreenProps } from './AppInfoModuleScreen.types';

export const AppInfoModuleScreen: React.FC<AppInfoModuleScreenProps> = () => {
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
