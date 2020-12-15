import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './Components/HomeScreen';
import OpenScreen from './Components/OpenScreen';
import OptionsScreen from './Components/OptionsScreen';
import DrawingScreen from './Components/DrawingScreen';
import SaveScreen from './Components/SaveScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const [state, setState] = useState({
    lines: [],
    strokeWidth: 25,
    strokeColor: "#774488"
  });


  return (
    <NavigationContainer
      initialRouteName="Home"
    >
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Draw"
          initialParams={{state: state, setState: (newState) => setState(newState)}}
          component={DrawingScreen}
        />
        <Drawer.Screen
          name="Open"
          component={OpenScreen}
        />
        <Drawer.Screen
          name="Save"
          component={SaveScreen}
        />
        <Drawer.Screen
          name="Options"
          component={OptionsScreen}
        />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}
