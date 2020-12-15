import React, { useState } from 'react';
import * as ExpoPixi from 'expo-pixi';
import { StyleSheet, View } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import styles from '../Styles/styles';


const DrawingCanvas = () => {

    const [strokeColor, setStrokeColor] = useState(0x000000);
    return (
        <View style={styles.canvas}>
            <ExpoPixi.Sketch
                style={styles.canvas}
                strokeColor={strokeColor}
                strokeWidth={35}
                strokeAlpha={0.5}
            />
            {/* <View style={styles.colorSelection}>
                <TouchableOpacity onPress={()=>setStrokeColor()}>

                </TouchableOpacity>
            </View> */}
            <View>
                <Picker
                    selectedValue={strokeColor}
                    onValueChange={(itemValue, itemIndex) => setStrokeColor(itemValue)}
                    style={{height: 200}}>
                    <Picker.Item label="Black" value={0x000000}></Picker.Item>
                    <Picker.Item label="Red" value={0xff0000}></Picker.Item>
                    <Picker.Item label="Blue" value={0x0000ff}></Picker.Item>
                    <Picker.Item label="Green" value={0x00ff00}></Picker.Item>
                    <Picker.Item label="Yellow" value={0xffff00}></Picker.Item>
                    <Picker.Item label="Purple" value={0x800080}></Picker.Item>
                </Picker>
            </View>
        </View>
        
    );
}

export default DrawingCanvas;
