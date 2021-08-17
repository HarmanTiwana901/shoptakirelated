import React from 'react'; 
import {View, Text, Image, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const getFonts = () => {
    return Font.loadAsync({
      // load fonts here
        
    })
}

// Icons

var cancel = require("./img/cancel.png");


export default function IDScanner() {
    return (
                <View style={styles.container}>  
                   <Text></Text>
                </View>
            )
        
        
    }
const styles = StyleSheet.create({

   
});