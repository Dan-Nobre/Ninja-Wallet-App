import 'react-native-reanimated';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { StatusBar } from 'expo-status-bar';


export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#4850DB' barStyle='light-content'></StatusBar>
      <Routes />
    </NavigationContainer>
  );
}