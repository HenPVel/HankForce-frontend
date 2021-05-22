import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';

function OpportunityShow({navigation}) {
    console.log('inOppShow', navigation.getParam('opportunity'))

    return(
        <View>
            <Text>{navigation.getParam('opportunity').opp_title}</Text>
        </View>
    )
}

export default OpportunityShow
