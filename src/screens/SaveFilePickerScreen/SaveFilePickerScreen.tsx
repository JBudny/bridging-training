import * as React from 'react';

import { useTheme } from '@react-navigation/native';

import { Layout, Row, Tag } from '@components';

import { getStyles } from './SaveFilePickerScreen.styles';
import { SaveFilePickerScreenProps } from './SaveFilePickerScreen.types';

export const SaveFilePickerScreen: React.FC<SaveFilePickerScreenProps> = () => {
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
          <Tag title="A piece of cake 🍰" />
          <Tag title="Turbo Native Module" />
          <Tag title="Android" />
        </Row>
      </Layout.Header>
      <Layout.Body />
    </Layout.Wrapper>
  );
};
