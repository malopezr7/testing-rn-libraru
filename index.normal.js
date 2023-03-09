import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {Root} from 'core';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Root);
