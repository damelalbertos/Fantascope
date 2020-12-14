import React from 'react';
import * as ExpoPixi from 'expo-pixi';
import { StyleSheet, View, AppState } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {drawImage} from './DrawingActions'

export const DrawingCanvas = (state = INITIAL_State, action) => {
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


// export default DrawingCanvas;

const styles = StyleSheet.create({
    canvas: {
        width: '100%',
        flex: 1
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