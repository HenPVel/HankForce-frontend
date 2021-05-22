import { StyleSheet, Text, View, SafeAreaView, Image, Button} from 'react-native';
import React from 'react';

function NewOpportunityPage() {
    return(
        <>
        <View style={styles.myOppsHeader}>
            <Text>Add an Opportunity</Text>
        </View>
        <View style={styles.myOppsContainer}>
            
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
        justifyContent: 'center',
        alignItems: 'center'
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
    },
    addOppButton: {
        flex:3
    }
    
})

export default NewOpportunityPage
