import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, TextInput} from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import 'react-native-gesture-handler';
import Navigator from './routes/homeStack'

export default function App() {

  useKeepAwake();

  return (
    <>
      <StatusBar style="auto" />
      <Navigator />
      </>
  );
}

