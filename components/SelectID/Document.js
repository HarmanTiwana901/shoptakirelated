import React from 'react'; 
import {TouchableHighlight, Button, View, Text, Image, StyleSheet, ViewBase} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const getFonts = () => {
    return Font.loadAsync({
        
        'robolight': require("../../assets/fonts/robolight.ttf")
        
    })
}


export default function Document(props) {

    return (
            <View style={styles.container}>
                
                    
                    <View style={styles.box}>
                        <Button title="Tester">
                            <Image style={styles.ID} source={props.icon}/>
                            <Text style={styles.type}>{props.type}</Text>
                        </Button>
                    </View>
               
            </View>
        )
    
    
}

const styles = StyleSheet.create({
    container: { 
        paddingTop: 35,
        width: "100%",
        
    },
    box: {
        borderRadius: 5,
        backgroundColor: "#E4E4E4",
        height: 68,
        display: 'flex',
        flexDirection: "row",
        

    },
    type: {
        
        position: 'relative',
        top: 19,
        fontFamily: 'robolight',
        fontSize: 18,
        paddingLeft: 15,
    },
    ID: {
        position: 'relative',
        top: 14,
        height: 40,
        width: 40,
        marginLeft: 15
    }
});