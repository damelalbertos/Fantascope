import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, 
            FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Hamburger from 'react-native-hamburger';
import DrawingCanvas from './DrawingCanvas';
import drawingReducer from './DrawingReducer';
import DrawingActions from './DrawingActions';

const Stack = createStackNavigator();
const store = createStore(drawingReducer);
const Drawer = createDrawerNavigator();

const [userNameInput, setUserInput] = useState('');
const [currID, setCurrID] = useState(1);
const [stringID, setStringID] = useState(currID + '')

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

function sketchHandler(sketch) {
  mapStateToProps(sketch.lines)
}

function SaveScreen({navigation,route}) {
  return (
    <View style={styles.other}>
      <Text>Save File</Text>
      <Text style={styles.title}>Save</Text>
      <UselessTextInput
        multiline
        numberOfLines = {4}
        value={userNameInput}
        onChangeText = {(userNameInput) => setUserInput(userNameInput)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={onPress = () => {
          setStringID(userNameInput);
          props.drawImage(setStringID);
          sketchHandler(sketchSave.lines);
          setCurrID(currID + 1);
          setStringID(null);
          setStringID(currID + '');
        }}
      >
      <Text>Save File</Text>
    </TouchableOpacity>
  </View>
  )
}

function OpenScreen({navigation, route}) {
  return (
    <View style={styles.other}>
      <View style={styles.hamburger}>
        <Hamburger
          active={open}
          type="cross"
          style={styles.hamburger}
          onPress={() => {navigation.openDrawer(); setOpen(!open);}}
        />        
      </View>
      <Text>Open File</Text>
      <Text style={styles.title}>Files</Text>
      <FlatList
        data = {{sketchSave}}
        style = {{flex:3}}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
      />
    </View>
  )
}

function OptionsScreen({navigation, route}) {
  return (
    <View style={styles.other}>
      <Text>Options</Text>
    </View>
  )
}


export default function App() {

  function DrawingScreen({navigation, route}) {
    const [open, setOpen] = useState(false);
    return (
      <View style={styles.other}>
        <DrawingCanvas />
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

  return (
    <Provider store = {store}>
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
            initialParams = {{prop: DrawingCanvas}}
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
    </Provider>
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
  },
  sketch: {
    flex: 1
  },
  sketchContain: {
    height: '50%'
  }
});

const mapStateToProps = (state) => {
  const { sketchSave } = state
  return { sketchSave }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
      drawImage,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App)

//Get redux working in app
//Get it working - Save something