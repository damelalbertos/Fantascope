import * as ExpoPixi from 'expo-pixi';
import { StyleSheet, View, AppState, Image } from 'react-native';
import { combineReducers } from 'redux';

import {ref} from './DrawingCanvas'
import {userNameInput} from './App'


const INITIAL_State = {
    current: [],
};

const drawingReducer = (state = INITIAL_State, action) => {
    const {
        current,
    } = actionState;

    switch (action.type) {
        case 'DRAW_IMAGE':
            const [state, setState] = useState({
                image: ref,
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
            
            const handleAppStateChangeAsync = nextAppState => {
                if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
                    setState({ appState: nextAppState, lines: this.sketch.lines });
                    return;
                }
                setState({ appState: nextAppState});
            }
            
            const componentDidMount = () => {
                AppState.addEventListener('change', handleAppStateChangeAsync);
            }
            
            const componentWillUnmount = () => {
                AppState.removeEventListener('change', handleAppStateChangeAsync);
            }
            
            const onChangeAsync = async(prop) => {
                const {uri} = await sketch.takeSnapshotAsync();
            
                setState({
                    image: {uri},
                    fileName: userNameInput,
                    strokeWidth: Math.random() * 30 + 10,
                    strokeColor: Math.random() * 0xffffff,
                });
            };

            const newSketch = {key: current.fileName, sketch: image};
            current.push(newSketch);
            const newState = {current};

            return newState;

        default:
            return actionState
    }
};

export default combineReducers({
    sketch: drawingReducer
});