import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import CustomComponent from './assets/components/CustomComponent'
import { useKeepAwake } from 'expo-keep-awake';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './assets/components/HomeScreen';

const Stack = createStackNavigator()

export default function App() {

  useKeepAwake();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    basetext:{
      fontWeight: "bold"
    }
  });
  

  const imageStyles = StyleSheet.create({
    container:{
      width: 100,
      height: 100
    }
  })


  const people = [
    {name:'frank'},
    {name:'alyssa'},
    {name: 'danny'},
    {name: 'zenaida'}
  ]

  const cheese = "cheese"

  const nameList = people.map( (person,index) => {
    console.log('lit')
    let x =1;
    return (
        <CustomComponent key={index} cheese={cheese} {...person} />
        
    )
  })

  return (
    <NavigationContainer>
      <View style={styles.container}>
      <Image style={imageStyles.container} source={require('./assets/hankforcelogo.png')} />
      </View>
      <StatusBar style="auto" />
    <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}} />
    <Stack.Screen>What's Good</Stack.Screen>
    </NavigationContainer>
  );
}


  {/* <View style={styles.container}>
      <Text style={styles.basetext}>Yesirskii. Tim V is traaaash!</Text>
      {nameList}
      <StatusBar style="auto" />
    </View> */}