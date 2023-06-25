/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import RTNCenteredTextNativeComponent from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <RTNCenteredTextNativeComponent
        text="Hello World!"
        style={{
          height: 30,
        }}
      />
    </SafeAreaView>
  );
}

export default App;
