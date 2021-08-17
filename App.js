import React from 'react';
import * as Font from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';
import SelectID from './components/SelectID/SelectID';
import IDScanner from './components/IDScanner/IDScanner';
const App = () => {
  return (
    <View style={styles.body}>
      <SelectID/>
      
    </View>
  )
} 

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FBF7F7',
    height: "100%",
    width: "100%",
    zIndex: -1
  }
})

export default App;