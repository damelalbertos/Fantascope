import React from 'react';
import { Text, View } from 'react-native';
import Hamburger from './Hamburger';
import styles from '../Styles/styles';


export default function OptionsScreen({navigation, route}) {
    return (
      <View style={styles.other}>
        <Text>Options</Text>
        <Hamburger
          navigation={navigation}
        />
      </View>
    )
  }
  