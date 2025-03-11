import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack1 from './navigation/DrawerNavigator';
import Stack2 from '../app-navigation/pages/Stack2';
import Stack3 from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Stack3 />
    </NavigationContainer>
  );
}