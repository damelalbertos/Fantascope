
import React from 'react';
import { View} from 'react-native';
import DrawingCanvas from './DrawingCanvas';
import styles from '../Styles/styles';
import Hamburger from './Hamburger';


export default function DrawingScreen({navigation, route}) {
    return (
      <View style={styles.other}>
        <DrawingCanvas/>  
        <Hamburger
          navigation={navigation}
        />
      </View>
    )
  }