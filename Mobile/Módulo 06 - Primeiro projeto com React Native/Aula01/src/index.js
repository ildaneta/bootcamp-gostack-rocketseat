import 'react-native-gesture-handler';
import './config/ReactotronConfig';

import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer>
      <>
        <StatusBar barStyle="light-content" backgroundColor="#f7a5a6" />
        <Routes />
      </>
    </NavigationContainer>
  );
}
