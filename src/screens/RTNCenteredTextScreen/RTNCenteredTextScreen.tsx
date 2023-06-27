import React from 'react';
import {getStyles} from './RTNCenteredTextScreen.styles';
import {RTNCenteredTextScreenProps} from './RTNCenteredTextScreen.types';
import {Layout, Row, Tag} from '@components';
import {useTheme} from '@react-navigation/native';
import RTNCenteredTextNativeComponent from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

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
        <RTNCenteredTextNativeComponent
          text="Hello World!"
          style={styles.rtnCenteredText}
        />
      </Layout.Body>
    </Layout.Wrapper>
  );
};
