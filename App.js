import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './assets/components/HomeScreen';
import LoadingScreen from './assets/components/LoadingScreen'
import Navigator from './routes/homeStack'

const Stack = createStackNavigator()

export default function App() {

  useKeepAwake();

  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
      </>
  );
}

