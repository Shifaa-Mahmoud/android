/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


const app = () => {
  return(
    <View
    ><Text>Hello World</Text>
    </View>
  );
};
export default app;
