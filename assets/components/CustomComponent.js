import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CustomComponent(props) {
    console.log(props)
    return (
        <Text>
           {props.cheese}
           YOLO
        </Text>
    )
}

export default CustomComponent