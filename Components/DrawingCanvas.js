import React, { useEffect, useRef, useState } from 'react';
import * as ExpoPixi from 'expo-pixi';
import { View } from 'react-native';
import styles from '../Styles/styles';
import BrushOptionsMenu from './BrushOptionsMenu';

const DrawingCanvas = (props) => {
    const {state, setState} = props;
    const {lines, strokeWidth: stateStrokeWidth, strokeColor: stateStrokeColor} = state;
    const [strokeColor, setStrokeColor] = useState(parseInt(stateStrokeColor.substring(1), 16));
    const [strokeWidth, setStrokeWidth] = useState(stateStrokeWidth);
    let sketchRef = useRef();


    useEffect(() => {
       return (() => setState({
            lines: sketchRef.lines,
            strokeWidth: strokeWidth,
            strokeColor: strokeColor
        }));
    });

    return (
        <View style={styles.canvas}>
            <ExpoPixi.Sketch
                ref={sketchRef}
                style={styles.canvas}
                strokeColor={strokeColor}
                strokeWidth={strokeWidth}
                strokeAlpha={1}
                // initialLines={lines}
            />
            <BrushOptionsMenu
                state={state}
                strokeWidth={strokeWidth}
                onColorChange={(color) => setStrokeColor(parseInt(color.substring(1), 16))}
                onStrokeWidthChange={(value) => setStrokeWidth(value)}
            />
        </View>
    );
}

export default DrawingCanvas;
