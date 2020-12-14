import React from 'react';
import * as ExpoPixi from 'expo-pixi';
import { StyleSheet, View, AppState } from 'react-native';

const INITIAL_State = {
    current: [],
};

export const DrawingCanvas = (state = INITIAL_State, action) => {
    const {
        current,
    } = actionState;

    switch (action.type) {
        case 'DRAW_IMAGE':
            const [state, setState] = useState({
                image: null,
                fileName: '',
                strokeColor: Math.random() * 0xffffff,
                strokeWidth: Math.random() * 30 + 10,
                lines: [
                {
                    points: [{ x: 300, y: 300 }, { x: 600, y: 300 }, { x: 450, y: 600 }, { x: 300, y: 300 }],
                    color: 0xff00ff,
                    alpha: 1,
                    width: 10,
                },
                ],
                appState: AppState.currentState
            });
            
            handleAppStateChangeAsync = nextAppState => {
                if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
                    setState({ appState: nextAppState, lines: this.sketch.lines });
                    return;
                }
                setState({ appState: nextAppState});
            }
            
            componentDidMount = () => {
                AppState.addEventListener('change', this.handleAppStateChangeAsync);
            }
            
            componentWillUnmount = () => {
                AppState.removeEventListener('change', this.handleAppStateChangeAsync);
            }
            
            function onChangeAsync = (async(prop)) => {
                const {uri} = await sketch.takeSnapshotAsync();
            
                setState({
                    image: {uri},
                    fileName: userNameInput,
                    strokeWidth: Math.random() * 30 + 10,
                    strokeColor: Math.random() * 0xffffff,
                });
            };
            
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
        break;
        default:
            actionState;
    }
}


// export default DrawingCanvas;

const styles = StyleSheet.create({
    canvas: {
        width: '100%',
        flex: 1
    }
});