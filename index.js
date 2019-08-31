/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import login from './screens/login';
import main from './screens/main';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => login);
AppRegistry.registerComponent(appName, () => main);


