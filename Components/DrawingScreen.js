
import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import Hamburger from 'react-native-hamburger';
import DrawingCanvas from './DrawingCanvas';
import styles from '../Styles/styles';


export default function DrawingScreen({navigation, route}) {
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