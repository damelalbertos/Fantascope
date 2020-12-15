import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';


export default function HomeScreen({navigation, route}) {
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

  
function buildButton(title, onPress) {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
}