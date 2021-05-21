import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';

function LoadingScreen({navigation}) {

    console.log(navigation)

    function pressHandler() {
        navigation.navigate('HomeScreen')
        //you can also use .pop......more for custom buttons
        //we get {navigation} because we used it in the stacknavigator
    }

    return(
    <View style={styles.container}>
      <Image style={imageStyles.container} source={require('../../assets/HankForceLogo.png')} />
      <Button style={{fontWeight:'bold'}} title="Enter" color="darkgreen" accessibilityLabel="Button to Enter App from Home Screen" onPress={pressHandler}/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    basetext:{
      fontWeight: "bold"
    }
  });
  
  
  const imageStyles = StyleSheet.create({
    container:{
      width: 300,
      height: 300
    }
  })


export default LoadingScreen