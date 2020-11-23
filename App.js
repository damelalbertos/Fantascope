import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ImageEditor } from '@wwimmo/react-native-sketch-canvas';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageEditor
        style={{flex: 1}}
        strokeColor={'red'}
        strokeWidth={7}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
