import React from 'react';
import { Text, View, FlatList } from 'react-native';
import Hamburger from './Hamburger';
import styles from '../Styles/styles';

export default function OpenScreen({navigation, route}) {
    return (
      <View style={styles.other}>
        <Hamburger
          navigation={navigation}
        />        
        <Text style={styles.title}>Files</Text>
        <FlatList
          // data = {{sketchSave}}
          style = {{flex:3}}
          // renderItem = {renderItem}
          keyExtractor = {item => item.id}
        />
    </View>
    )
  }