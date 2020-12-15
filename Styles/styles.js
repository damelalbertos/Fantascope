
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
      backgroundColor: "#DDDDDD",
      padding: 15,
      margin: 3
    },
    hamburger: {
      position: 'absolute',
      top: 30,
      left: 15
    },
    canvas: {
        width: '100%',
        flex: 1
    },
    colorSelection: {
        flexDirection: 'row',
    }
  });
  
  export default styles;