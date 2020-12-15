
import React from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    other: {
      flex: 1
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
      backgroundColor: "#888888",
      padding: 15,
      margin: 3,
      borderRadius: 5
    },
    buttonText: {
      color: '#eeeeee',
      fontSize: 18
    },
    hamburger: {
      position: 'absolute',
      top: 40,
      left: 20
    },
    hamburgerIcon: {
      width: 40,
      height: 40
    },
    canvas: {
        width: '100%',
        flex: 1
    },
    colorSelection: {
        position: 'absolute',
        width: 250,
        backgroundColor: '#ffffff',
        top: 35,
        right: 15,
        padding: 15,
        borderRadius: 5
    },
    colorTriangle: {
      width: '100%',
      height: 250,
      marginBottom: 15
    }
  });
  
  export default styles;