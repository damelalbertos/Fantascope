import React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import styles from '../Styles/styles';


export default function Hamburger(props) {
    const {navigation} = props;
    return (
        <View style={styles.hamburger}>
          <TouchableWithoutFeedback
            onPress={() => navigation.openDrawer()}
          >
            <Image
              style={styles.hamburgerIcon}
              source={require('../menu.png')}
            />
          </TouchableWithoutFeedback>   
        </View>
    )
}