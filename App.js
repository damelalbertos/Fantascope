import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, AppState, 
            FlatList, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Hamburger from 'react-native-hamburger';
import { DrawingCanvas } from './DrawingCanvas';
import * as ExpoPixi from 'expo-pixi';

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
  const [userNameInput, setUserInput] = useState('');
  const [currID, setCurrID] = useState(1);
  const [stringID, setStringID] = useState(currID + '')

  const DATA = [];

  // const [state, setState] = useState({
  //   image: null,
  //   fileName: '',
  //   strokeColor: Math.random() * 0xffffff,
  //   strokeWidth: Math.random() * 30 + 10,
  //   lines: [
  //     {
  //       points: [{ x: 300, y: 300 }, { x: 600, y: 300 }, { x: 450, y: 600 }, { x: 300, y: 300 }],
  //       color: 0xff00ff,
  //       alpha: 1,
  //       width: 10,
  //     },
  //   ],
  //   appState: AppState.currentState
  // });

  // handleAppStateChangeAsync = nextAppState => {
  //   if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
  //     setState({ appState: nextAppState, lines: this.sketch.lines });
  //       return;
  //     }
  //     setState({ appState: nextAppState});
  // }

  // componentDidMount = () => {
  //   AppState.addEventListener('change', this.handleAppStateChangeAsync);
  // }

  // componentWillUnmount = () => {
  //   AppState.removeEventListener('change', this.handleAppStateChangeAsync);
  // }

  // onChangeAsync = async(prop) => {
  //   const {uri} = await sketch.takeSnapshotAsync();

  //   setState({
  //     image: {uri},
  //     fileName: userNameInput,
  //     strokeWidth: Math.random() * 30 + 10,
  //     strokeColor: Math.random() * 0xffffff,
  //   });
  // };

  useEffect(() => {
    // Update the document title using the browser API
    console.log('You enterered ' + userNameInput + ' that is given the id ' + stringID);
    }, [DATA]);

  const renderItem = ({ item }) => (
        <Text style={styles.itemRow}> 
          {item.title} 
        </Text>
      );

  const [origData, setNewData] = useState(DATA);

  const addItem = () => {
    var newArray = [];
    newArray = origData.slice();
    setStringID(currID + ' ');
    newArray.push({id: stringID, file: state});
    setNewData(newArray);
    setCurrID(currID + 1);
    setStringID(null);
    setStringID(currID + '');
  } 

  //Use input for file name
  //Save screen is called within the hamburger
  //Text input for the file name and then button to save

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
            
            addItem();
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
        <Text>Open File</Text>
        <Text style={styles.title}>Files</Text>
        <FlatList
          data = {origData}
          style = {{flex:3}}
          renderItem = {renderItem}
          keyExtractor = {item => item.id}
        />
      </View>
    )
  }

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

//Get redux working in app
//Get it working - Save something