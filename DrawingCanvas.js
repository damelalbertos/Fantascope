import React from 'react';
import * as ExpoPixi from 'expo-pixi';
import { StyleSheet, View } from 'react-native';

const DrawingCanvas = () => {

    return (
        <View style={styles.canvas}>
            <ExpoPixi.Sketch
                ref={ref => sketchSave = ref}
                style={styles.canvas}
                strokeColor={0xff00ff}
                strokeWidth={35}
                strokeAlpha={0.5}
            />
        </View>
        
    );
}

export default DrawingCanvas;

const styles = StyleSheet.create({
    canvas: {
        width: '100%',
        flex: 1
    }
});