import React from 'react'; 
import {View, Text, Image, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Document from './Document.js'


const getFonts = () => {
    return Font.loadAsync({
        'robobold': require("../../assets/fonts/robobold.ttf"),
        
    })
}

// Icons

var cancel = require("./img/cancel.png");
var ID = require("./img/ID.png");
var NID = require("./img/nationalid.png");
var PP = require("./img/passport.png");


export default function SelectID() {
return (
            <View style={styles.container}>  
               
                    <Image style={styles.cancel} source={cancel}/>
                    
                
                <Text style={styles.title}>ID Document Type</Text>
                <Text style={styles.subtitle}>
                    Please select a document type to scan & ensure
that all information is within the scanner border.</Text>

                <View style={styles.documentWrapper}>
                    <Document icon={ID} type='Drivers License'/>
                    <Document icon={PP} type='Passport'/>
                    <Document icon={NID} type='National ID Card'/>
                </View>
            </View>
        )
    
    
}

const styles = StyleSheet.create({
    container: {
       top: 35,
       width: "90%",
       margin: "auto",
       paddingLeft: 30,
       zIndex: 0,
      

    },
    cancel: {
        height: 20,
        width: 20,
    },
    
  
    title: {
        paddingTop: 25,
        width: "100%",
        color: "black",
        fontSize: 20,
        fontFamily: "roboblack",
        fontStyle: "normal"   
    },
    subtitle: {
        width: "100%",
        color: "black",
        fontSize: 15,
        fontFamily: "roboreg"
    },
    documentWrapper: {
        top: 50,
        width: '100%',
        height: '66%'
    },
   
});