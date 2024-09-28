import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import connect from 'react-devtools-core';

AppRegistry.registerComponent(appName, () => App);

// const { connectToDevTools } = require('react-devtools-core');
//
// connectToDevTools({
//   host: 'localhost',
//   port: 8097,
// });
