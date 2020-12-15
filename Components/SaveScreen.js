

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../Styles/styles';
import Hamburger from './Hamburger';

function UselessTextInput(props) {
    return (
      <TextInput
            {...props}
            autoFocus
            style={{height:40, borderWidth:1}}
            editable
            maxLength = {40}
        />
    );
}

export default function SaveScreen({navigation,route}) {
    const [userNameInput, setUserInput] = useState('');
    const [currID, setCurrID] = useState(1);
    const [stringID, setStringID] = useState(currID + '')


    return ([
        <Hamburger
            navigation={navigation}
        />,
        <View style={styles.buttons}>
            <Text style={styles.title}>Save</Text>
            <UselessTextInput
                multiline
                numberOfLines = {4}
                value={userNameInput}
                onChangeText = {(userNameInput) => setUserInput(userNameInput)}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setStringID(userNameInput);
                    // props.drawImage(setStringID);
                    // sketchHandler(sketchSave.lines);
                    setCurrID(currID + 1);
                    setStringID(null);
                    setStringID(currID + '');
                }}
            >
            <Text>Save File</Text>
            </TouchableOpacity>
        </View>
    ]
  )
}