
import React from 'react';
import { View} from 'react-native';
import DrawingCanvas from './DrawingCanvas';
import styles from '../Styles/styles';
import Hamburger from './Hamburger';
import { set } from 'react-native-reanimated';


export default function DrawingScreen({navigation, route}) {
    const {state, setState} = route.params;
  
    return (
      <View style={styles.other}>
        <DrawingCanvas
          state={state}
          setState={setState}
        />  
        <Hamburger
          navigation={navigation}
        />
      </View>
    )
  }