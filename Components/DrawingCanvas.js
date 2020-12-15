import React, { useState } from 'react';
import * as ExpoPixi from 'expo-pixi';
import { StyleSheet, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from '../Styles/styles';
import BrushOptionsMenu from './BrushOptionsMenu';

const DrawingCanvas = () => {

    const [strokeColor, setStrokeColor] = useState(0x774488);
    const [strokeWidth, setStrokeWidth] = useState(35);

    return (
        <View style={styles.canvas}>
            <ExpoPixi.Sketch
                style={styles.canvas}
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                strokeAlpha={1}
            />
            {/* <View style={styles.colorSelection}>
                <TouchableOpacity onPress={()=>setStrokeColor()}>

                </TouchableOpacity>
            </View> */}
            <BrushOptionsMenu
                strokeWidth={strokeWidth}
                onColorChange={(color) => setStrokeColor(parseInt(color.substring(1), 16))}
                onStrokeWidthChange={(value) => setStrokeWidth(value)}
            />
        </View>
    );
}

export default DrawingCanvas;
