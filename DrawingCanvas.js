import React, { useState } from 'react';
import * as ExpoPixi from 'expo-pixi';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';


import {drawImage} from './DrawingActions'
import * as reducer from './DrawingReducer'

export const DrawingCanvas = () => {
    const [strokeColor, setStrokeColor] = useState(0x000000);
    return (
        <View style={styles.canvas}>
            <ExpoPixi.Sketch
                sketchSave = {ref}
                style={styles.canvas}
                strokeColor={strokeColor}
                strokeWidth={35}
                strokeAlpha={0.5}
                onChange = {onChangeAsync.reducer}
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


// export default DrawingCanvas;

const styles = StyleSheet.create({
    canvas: {
        width: '100%',
        flex: 1
    },
    colorSelection: {
        flexDirection: 'row',
    }
});

const mapStateToProps = (state) => {
    const { sketchSave } = state
    return { sketchSave }
}
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        drawImage,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DrawingCanvas)