import React from 'react';
import { Text, View } from 'react-native';
import Hamburger from 'react-native-hamburger';
import styles from '../Styles/styles';

export default function OpenScreen({navigation, route}) {
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
      </View>
    )
  }