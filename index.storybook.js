import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

const StorybookUIRoot = require('./.storybook').default;
AppRegistry.registerComponent(appName, () => StorybookUIRoot);
