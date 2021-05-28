import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal } from 'react-native';
import React, {useState} from 'react';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import EditOpportunityForm from './EditOpportunityForm'
import {HOST_WITH_PORT} from '../../environment'
import AddActivityForm from './AddActivityForm'

function OpportunityShow({navigation}) {
console.log('addActOnOppShow', navigation.getParam('addActivity'))

    const [isEditOppModalOpen, setIsEditOppModalOpen ] = useState(false)
    const [isDeleteOppModalOpen, setIsDeleteOppModalOpen] = useState(false)
    const [isAddActivityModalOpen, setIsAddActivityModalOpen] = useState(false)

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

    const {contact_person, expected_close, id, opp_title, organization_id, stage, value, activities} = navigation.getParam('opportunity')
    console.log(activities)
    
    const listedActivities = activities.map(activity => {
        
        console.log(activity.created_at)
        const postedDate = new Date(activity.created_at.slice(0,4), activity.created_at.slice(5,7), activity.created_at.slice(8,10), activity.created_at.slice(11,13), activity.created_at.slice(14,16), activity.created_at.slice(17,19))
        //opportunityObject.expected_close.slice(0,4), opportunityObject.expected_close.slice(5,7), opportunityObject.expected_close.slice(8,10)
        const date = postedDate.getDate()
        const month = postedDate.getMonth()
        const year = postedDate.getFullYear()
        const hour = postedDate.getHours()
        const minutes = postedDate.getMinutes()

        const dateString = (month) + "/" + date + "/" + year
        const timeString = (hour-4)+":"+(minutes)
        return(
            <View key={activity.id}>
                {/* <Text>Activity#{count} {activity.title}</Text> */}
                <Text>Conducted On {dateString} @ {timeString}</Text>
                <Text>{activity.content}</Text>
                <Text>___________________________________________________</Text>
            </View>
        )
    })

    function handleAddActivityButtonPress() {
        setIsAddActivityModalOpen(true)
    }

    function handleDeleteActCancelButtonPress() {
        setIsAddActivityModalOpen(false)
    }

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

        <Modal visible={isAddActivityModalOpen} animationType='slide'>
            <View style={styles.container}>
                <Text>Add Activity Details...</Text>
                <AddActivityForm oppId={id} setIsAddActivityModalOpen={setIsAddActivityModalOpen} addActivity={navigation.getParam('addActivity')} fullOppObject={navigation.getParam('opportunity')}/>
                <Button onPress={handleDeleteActCancelButtonPress} title='Cancel'></Button>
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
            <MaterialIcons style={{alignSelf:'flex-end', color:'green'}} name='add' size={35} onPress={handleAddActivityButtonPress}/>
            <MaterialCommunityIcons name="delete-circle" size={35} style={{alignSelf:'flex-end', color:'green'}} onPress={handleDeleteOppButtonPress} />
        </View>
        <View>
            <Text>Opportunity Activities:</Text>
            {listedActivities.length>0 ? listedActivities : <Text>"You have no activities on this opportunity at this time."</Text>}
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
