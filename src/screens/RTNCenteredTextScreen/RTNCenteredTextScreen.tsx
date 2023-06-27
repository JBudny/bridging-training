import React from 'react';
import {getStyles} from './RTNCenteredTextScreen.styles';
import {RTNCenteredTextScreenProps} from './RTNCenteredTextScreen.types';
import {Layout, Row, Typography, Tag} from '@components';
import {useTheme} from '@react-navigation/native';

export const RTNCenteredTextScreen: React.FC<
  RTNCenteredTextScreenProps
> = () => {
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
          <Tag title="Fabric Native Component" />
        </Row>
      </Layout.Header>
      <Layout.Body>
        <Typography variant="medium" size="medium" color={theme.colors.black}>
          RTNCenteredText placeholder
        </Typography>
      </Layout.Body>
    </Layout.Wrapper>
  );
};
