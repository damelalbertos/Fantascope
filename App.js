import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Hamburger from 'react-native-hamburger';
import DrawingCanvas from './DrawingCanvas';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './HomeScreen';


// const Stack = createStackNavigator();

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function buildButton(title, onPress) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

function HomeScreen({navigation, route}) {
  return (
    <View style={styles.other}>
      <Text style={styles.title}>Fantascope</Text>
      <View style={styles.buttons}>
        {buildButton("New Drawing", () => navigation.navigate('Draw'))}
        {buildButton("Open Drawing", () => navigation.navigate('Open'))}
        {buildButton("Options", () => navigation.navigate('Options'))}
        
      </View>

    </View>
  );
}

function DrawingScreen({navigation, route}) {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.other}>
      <DrawingCanvas/>
      <View style={styles.hamburger}>
        <Hamburger
          active={open}
          type="cross"
          style={styles.hamburger}
          onPress={() => {navigation.openDrawer(); setOpen(!open);}}
        />        
      </View>

    </View>
  )
}

function OpenScreen({navigation, route}) {
  return (
    <View style={styles.other}>
      <Text>Open File</Text>
    </View>
  )
}

function UselessTextInput(props) {
      return (
        <TextInput
              {...props}
              autoFocus
              style={{height:40, borderWidth:1}}
              editable
              maxLength = {40}
          />
      );
}

function OptionsScreen({navigation, route}) {
  return (
    <View style={styles.other}>
      <Text>Options</Text>
    </View>
  )
}


export default function App() {


  //Uset input for file name
  //Save screen is called within the hamburger
  //Text input for the file name and then button to save
  const [userNameInput, setUserInput] = useState('');

  function SaveScreen({navigation,route}) {
    return (
      <View style={styles.other}>
        <Text style={styles.title}>Save</Text>
        <UselessTextInput
          multiline
          numberOfLines = {4}
          value={userNameInput}
          onChangeText = {(userNameInput) => setUserInput(userNameInput)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
        <Text>Save File</Text>
      </TouchableOpacity>
    </View>
  )
}
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
          component={DrawingScreen}
        />
        <Drawer.Screen
          name="Open"
          component={OpenScreen}
        />
        <Drawer.Save
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  other: {
    flex: 1
  },
  save: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    textAlign: "center",
    padding: 25,
    marginTop: 100
  },
  buttons: {
    margin: 50
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    margin: 3
  },
  hamburger: {
    position: 'absolute',
    top: 30,
    left: 15
  }
});
