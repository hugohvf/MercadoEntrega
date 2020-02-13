import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#282828" />
      <Routes />
    </Provider>
  );
}