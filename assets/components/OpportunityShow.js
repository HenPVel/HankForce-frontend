import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal } from 'react-native';
import React, {useState} from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import EditOpportunityForm from './EditOpportunityForm'

function OpportunityShow({navigation}) {

    const [isEditOppModalOpen, setIsEditOppModalOpen ] = useState(false)
    const [isDeleteOppModalOpen, setIsDeleteOppModalOpen] = useState(false)

    function handleEditOppButtonPress() {
        setIsEditOppModalOpen(true)
    }
    function handleEditOppCancelButtonPress() {
        setIsEditOppModalOpen(false)
    }

    function handleDeleteOppButtonPress() {
        setIsDeleteOppModalOpen(true)
    }

    function handleDeleteOppCancelButtonPress() {
        setIsDeleteOppModalOpen(false)
    }

    function handleDeleteConfirmationPress() {
        navigation.getParam('deleteOpportunity')(id, setIsDeleteOppModalOpen)
    }

    const {contact_person, expected_close, id, opp_title, organization_id, stage, value} = navigation.getParam('opportunity')

    return(
        <>
        <Modal visible={isEditOppModalOpen} animationType='slide'>
            <View style={styles.container}>
                <Text>Edit Opportunity</Text>
                <EditOpportunityForm setIsEditOppModalOpen={setIsEditOppModalOpen} editOpportunity={navigation.getParam('editOpportunity')} opportunityObject={navigation.getParam('opportunity')} userCompanies={navigation.getParam('userCompanies')}/>
                <Button onPress={handleEditOppCancelButtonPress} title='Cancel' ></Button>
            </View>
        </Modal>
        
        <Modal visible={isDeleteOppModalOpen} animationType='slide'>
            <View style={styles.container}>
                <Text>Are you sure you want to delete:</Text>
                <Text>{opp_title}</Text>
                <Button title={`Yes, delete ${opp_title}`} onPress={handleDeleteConfirmationPress} ></Button>
                <Button onPress={handleDeleteOppCancelButtonPress} title='Cancel' ></Button>
            </View>
        </Modal>

        <View>
            <Text>Opportunity Name:</Text>
            <Text>{opp_title}</Text>
            <Text>Pipeline Value:</Text>
            <Text>{value}</Text>
            <Text>Sales Stage:</Text>
            <Text>{stage}</Text>
            <Text>Company Name:</Text>
            <Text>{navigation.getParam('userCompanies').find(company => company.id === organization_id).organization_name}</Text>
            <Text>Title:</Text>
            <Text>{opp_title}</Text>
            <MaterialIcons style={{alignSelf:'flex-end', color:'green'}} name='edit' size={35} onPress={handleEditOppButtonPress} />
            <MaterialIcons style={{alignSelf:'flex-end', color:'green'}} name='add' size={35} />
            <MaterialCommunityIcons name="delete-circle" size={35} style={{alignSelf:'flex-end', color:'green'}} onPress={handleDeleteOppButtonPress} />
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

export default OpportunityShow
