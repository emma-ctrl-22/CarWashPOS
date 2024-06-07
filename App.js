import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigations from './Navigations/Navigation';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Navigations />
    </GestureHandlerRootView>
  );
}