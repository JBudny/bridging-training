import React from 'react';
import {getStyles} from './RTNCenteredTextScreen.styles';
import {RTNCenteredTextScreenProps} from './RTNCenteredTextScreen.types';
import {Layout, Row, Typography} from '@components';
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
          <Typography variant="medium" size="medium" color={theme.colors.black}>
            Details: Fabric Native Component
          </Typography>
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
