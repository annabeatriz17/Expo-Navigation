import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack1 from './navigation/Dr';
import Stack2 from '../app-navigation/pages/Stack2';
//import Stack3 from './pages/StackScreen3';

export default function App() {
  return (
    <NavigationContainer>
      <Stack2 />
    </NavigationContainer>
  );
}