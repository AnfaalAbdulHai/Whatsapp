import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stack_navigation from './config/Stack_navigation';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack_navigation/>
    </NavigationContainer>
  );
}

export default App;