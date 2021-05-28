import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Text, Platform} from 'react-native';

function AddActivityForm({navigation, oppId, addActivity, setIsAddActivityModalOpen, fullOppObject}) {
    
    console.log("fullOppObject", fullOppObject)
    const [newActivityFormData, setNewActivityFormData] = useState({
        title:'',
        content:'',
        opportunity_id: oppId 
    })    

    console.log(newActivityFormData)

    function handleTextChange(text, key) {
        setNewActivityFormData({...newActivityFormData, [key]:text})
    }

    function handleAddActivitySubmitPress() {
        addActivity(newActivityFormData, setIsAddActivityModalOpen, fullOppObject)
    }

    return(
        <>
        <View>
            <Text>Activity Name:</Text>
            <TextInput
                placeholder='2-3 Word Description of Activity'
                value={newActivityFormData.title}
                onChangeText={text => handleTextChange(text, 'title')}
            />
            <Text>Activity Summary:</Text>
            <TextInput
                placeholder='Full Activity Description'
                value={newActivityFormData.content}
                onChangeText={text => handleTextChange(text, 'content')}
            />
            <Button title="Submit" onPress={handleAddActivitySubmitPress}></Button>
        </View>
        </>
    )}

export default AddActivityForm