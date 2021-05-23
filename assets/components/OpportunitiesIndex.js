import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal } from 'react-native';
import React, {useState} from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import NewOpportunityForm from './NewOpportunityForm';

function OpportunitiesIndex({ navigation }) {
    console.log(navigation.getParam('userOpportunities'))
    const userOpportunities = navigation.getParam('userOpportunities')
    console.log('userOpportunities', userOpportunities)
    const userCompanies = navigation.getParam('userCompanies')
    console.log('userCompanies', userCompanies)

    function handleOppItemPress (opportunity) {
        console.log(opportunity)
        navigation.navigate('OpportunityShow', {'opportunity':opportunity})
    }

const tableListItems = userOpportunities.map(opportunity => {
    return (
        <View key={opportunity.id} styles={styles.liStyle} >
            <Text onPress={() => handleOppItemPress(opportunity)}>Name: {opportunity.opp_title}</Text>
            <Text>Expected Close Date:{opportunity.expected_close}</Text>
            <Text>Stage: {opportunity.stage}</Text>
            <Text>${opportunity.value}</Text>
            <Text></Text>
        </View>
    )
})

function handleAddOppButtonPress() {
    setIsNewOppModalOpen(true)
}

function handleNewOppCancelButtonPress() {
    setIsNewOppModalOpen(false)
}

const [isNewOppModalOpen, setIsNewOppModalOpen ] = useState(false)



    return(
        <>
        <Modal visible={isNewOppModalOpen} animationType='slide'>
            <View style={styles.container}>
                <Text>Enter your new opportunity details below...</Text>
                <NewOpportunityForm userCompanies={userCompanies} />
                <Button onPress={handleNewOppCancelButtonPress} title='Cancel' ></Button>
            </View>
        </Modal>
        <View style={styles.container}>
            <Text>My Opportunities</Text>
        </View>
        <View style={styles.myOppsContainer}>
        {tableListItems}
        {/* <Button title='Add Opportunity' onPress={handleAddOppButtonPress} ></Button> */}
        <MaterialIcons style={{alignSelf:'flex-end'}} name='add' size={35} onPress={handleAddOppButtonPress} />
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
    },
    addOppButton: {
        flex:3
    }
    
})


export default OpportunitiesIndex