import { StyleSheet, Text, View, SafeAreaView, Image, Button } from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {HOST_WITH_PORT} from '../../environment'

function HomeScreen({navigation}) {
    const[userOpportunities, setUserOpportunities] = useState([])
    const[userCompanies, setUserCompanies] = useState([])
    
    const salesPersonId = 2
    //going to need to refactor this

    

    useEffect(fetchUserOpportunities, [])
    useEffect(fetchUserCompanies, [])
    

    function fetchUserOpportunities() {
        fetch(`${HOST_WITH_PORT}/salespersons/${salesPersonId}/opportunities`)
        .then(res => res.json())
        .then(setUserOpportunities)
    }

    function fetchUserCompanies() {
        fetch(`${HOST_WITH_PORT}/organizations`)
        .then(res => res.json())
        .then(setUserCompanies)
    }
    
    

    let opportunityElements = userOpportunities.map(opportunity => {
        return(
            <View key={opportunity.id}>
            <Text>{opportunity.opp_title}</Text>
            <Text>{opportunity.value}</Text>
            <Text>{opportunity.expected_close}</Text>
            </View>
        ) 
    })

    function handleMyOppButtonPress() {
        navigation.navigate('OpportunitiesIndex', {userOpportunities: userOpportunities, userCompanies: userCompanies, addOpportunity: addOpportunity, editOpportunity: editOpportunity, deleteOpportunity:deleteOpportunity})
    }

    function addOpportunity(formDataObject, setIsNewModalOpen) {
        fetch(`${HOST_WITH_PORT}/opportunities`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDataObject)
        })
        .then(res => res.json())
        .then(newOppObject => {
            
            const newArray = [...userOpportunities, newOppObject]
            setUserOpportunities(newArray)
            setIsNewModalOpen(false)
            navigation.navigate('OpportunitiesIndex', {userOpportunities:newArray})
            
        } )
    }

    function editOpportunity(formData, oppObject, setIsEditOppModalOpen) {
        fetch(`${HOST_WITH_PORT}/opportunities/${oppObject.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(updatedObject => {
            const filteredOpps = userOpportunities.filter(opp => opp.id !== oppObject.id)
            setUserOpportunities([...filteredOpps, updatedObject])
            setIsEditOppModalOpen(false)
            navigation.navigate('OpportunityShow', {opportunity:updatedObject})
            
        })
    }

    function deleteOpportunity(oppId, setIsDeleteOppModalOpen) {
        fetch(`${HOST_WITH_PORT}/opportunities/${oppId}`, {
            method: "DELETE"
        })
        // .then(console.log)
        .then( _ => {
            const alteredOpps = userOpportunities.filter(opp => opp.id !== oppId )
            setUserOpportunities(alteredOpps)
            setIsDeleteOppModalOpen(false)
            navigation.navigate('OpportunitiesIndex', {userOpportunities: alteredOpps, userCompanies: userCompanies, addOpportunity: addOpportunity, editOpportunity: editOpportunity, deleteOpportunity:deleteOpportunity})
        })
    }

    return(
        <>
        <View style={styles.container}>
        <Text>Hi, Gwynne Shotwell!</Text>
        <Text>Anotha' Day Anotha' Dolla'</Text>
        <Text>Let's Make Some Sales!</Text>
        </View>
        <View style={styles.summary}>  
        <Text style={styles.summaryText}>Summary To Be Determined</Text>
        <Button title="My Opportunities" onPress={handleMyOppButtonPress} ></Button>
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
    }
})



export default HomeScreen