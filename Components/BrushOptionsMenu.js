import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import Slider from '@react-native-community/slider';
import { toHsv, fromHsv } from 'react-native-color-picker'
import styles from '../Styles/styles';
// import { useState } from 'react';


export default function BrushOptionsMenu(props) {
    const { state, strokeWidth, onColorChange, onStrokeWidthChange } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [stringColor, setStringColor] = useState(state.strokeColor);

    function colorButton() {
        return (
            <TouchableHighlight
                style={{
                    position: 'absolute',
                    top: 45,
                    right: 25,
                    height: 40,
                    width: 40,
                    backgroundColor: stringColor,
                    borderRadius: 20,
                    borderColor: '#000000',
                    borderWidth: 3
                }}
                onPress={() => setIsOpen(!isOpen)}
            >  
                <View></View>
            </TouchableHighlight>
        );
    }

    return (
        isOpen ? 
            [<View style={styles.colorSelection}>

                <Text>Color: {stringColor.toUpperCase()}</Text>
                <TriangleColorPicker
                    style={styles.colorTriangle}
                    defaultColor={stringColor}
                    onColorChange={(color) => {onColorChange(fromHsv(color)); setStringColor(fromHsv(color))}}
                />
                <Text>Stroke Width: {Math.round(strokeWidth)}</Text>
                <Slider
                    minimumValue={10}
                    maximumValue={100}
                    value={strokeWidth}
                    onValueChange={(value) => onStrokeWidthChange(value)}
                />
                
            </View>,
            colorButton()
            ]
        :
            colorButton()
    );
}

