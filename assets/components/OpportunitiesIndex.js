import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';

function OpportunitiesIndex({ navigation }) {
    console.log(navigation.getParam('userOpportunities'))
    const userOpportunities = navigation.getParam('userOpportunities')
    console.log('userOpportunities', userOpportunities)

const tableListItems = userOpportunities.map(opportunity => {
    return (
        <View styles={styles.liStyle} >
            <Text>Name: {opportunity.opp_title}</Text>
            <Text>Expected Close Date:{opportunity.expected_close}</Text>
            <Text>Stage: {opportunity.stage}</Text>
            <Text>${opportunity.value}</Text>
        </View>
    )
})

    return(
        <>
        <View style={styles.container}>
            <Text>My Opportunities</Text>
        </View>
        <View style={styles.myOppsContainer}>
        {tableListItems}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgreen',
        alignItems: 'center',
        justifyContent: 'center'
    },
    summary: {
        flex: 9,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    summaryText: {
        fontSize: 40
    },
    myOppsHeader: {
        flex: 1,
        backgroundColor: 'darkgreen',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    myOppsContainer: {
        flex: 4,
        backgroundColor: 'lightgrey',
        alignItems: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    liStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
})


export default OpportunitiesIndex