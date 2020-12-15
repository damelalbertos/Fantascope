import React from 'react';
import { Text, View } from 'react-native';
import Hamburger from './Hamburger';
import styles from '../Styles/styles';

export default function OpenScreen({navigation, route}) {
    return (
      <View style={styles.other}>
        <Hamburger
          navigation={navigation}
        />  
        <Text>Open File</Text>
      </View>
    )
  }