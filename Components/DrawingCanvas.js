import React, { useState } from 'react';
import * as ExpoPixi from 'expo-pixi';
import { View } from 'react-native';
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
            <BrushOptionsMenu
                strokeWidth={strokeWidth}
                onColorChange={(color) => setStrokeColor(parseInt(color.substring(1), 16))}
                onStrokeWidthChange={(value) => setStrokeWidth(value)}
            />
        </View>
    );
}

export default DrawingCanvas;
