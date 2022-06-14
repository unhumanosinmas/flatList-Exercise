/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Vista from './src/homeView';


const App  = () => {

  return (
    <SafeAreaView>
        <View>
          <Vista/>
        </View>
    </SafeAreaView>
  );
};

export default App;
