import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app/app.json';

AppRegistry.registerComponent(appName, () => App);
