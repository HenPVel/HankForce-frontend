import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, Modal, TextInput } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from '@react-native-community/datetimepicker';

function EditOpportunityForm({ opportunityObject, userCompanies, editOpportunity, setIsEditOppModalOpen }) {

    const cleanDate = JSON.parse(`\"${opportunityObject.expected_close}T00:00:00.000Z\"`)

    const [editOppFormData, setEditOppFormData] = useState({
        opp_title: opportunityObject.opp_title,
        organization_id: opportunityObject.organization_id,
        contact_person: opportunityObject.contact_person,
        value: `${opportunityObject.value}.00`,
        stage: opportunityObject.stage,
        expected_close: new Date(opportunityObject.expected_close.replace(/-/g, '\/'))
    })
    //opportunityObject.expected_close.slice(0,4), opportunityObject.expected_close.slice(5,7), opportunityObject.expected_close.slice(8,10)

    const companyCollectionSelect = userCompanies.map( company => {
        return(
            {['label']:company.organization_name, ['value']:company.id}
        )
    })


    function handleTextChange(text, key) {
        setEditOppFormData({...editOppFormData, [key]:text})
    }


    

    function handleSubmitButtonPress() {
        editOpportunity(editOppFormData, opportunityObject, setIsEditOppModalOpen)
    }

    return(
        <View>
            <View>
                <Text>Opportunity Name:</Text>
                <TextInput
                    placeholder='Opportunity Name'
                    onChangeText={text => handleTextChange(text, 'opp_title')}
                    value={editOppFormData.opp_title}
                />
                <Text>{`Opportunity Value ($):`}</Text> 
                <TextInput
                    placeholder='$ Value'
                    value={editOppFormData.value}
                    keyboardType='decimal-pad'
                    onChangeText={text => handleTextChange(text, 'value')}
                />
                <Text>Opportunity Stage:</Text>
                <RNPickerSelect 
                    onValueChange={value => handleTextChange(value,'stage')}
                    placeholder={{label:"Select Opportunity Stage", value: null}}
                    items={
                        [{label:"Target", value:"Target"},
                         {label:"Qualify", value:"Qualify"},
                         {label:"Educate", value:"Educate"},
                         {label:"Propose", value:"Propose"},
                         {label:"Negotiate", value:"Negotiate"},
                         {label:"Closed/Won", value:"Closed/Won"},
                         {label:"Closed/Lost", value:"Closed/Lost"}
                        ]
                    }
                    value={editOppFormData.stage}
                />
                <Text>Company Name:</Text> 
                <RNPickerSelect
                    onValueChange={value => handleTextChange(value,'organization_id')}
                    placeholder={{ label: "Select a Company From Existing Database", value:null}}
                    items={companyCollectionSelect}
                    value = {editOppFormData.organization_id}
                />
                <Text>Contact First and Last Name:</Text>
                <TextInput 
                    placeholder='FirstName LastName'
                    onChangeText={text => handleTextChange(text, 'contact_person')}
                    value={editOppFormData.contact_person}
                />
                <Text>Expected Close Date:</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={editOppFormData.expected_close}
                    mode="date"
                    display="default"
                    onChange={(event, date) => handleTextChange(date, 'expected_close')}
                />
                <Button title="Submit Changes" onPress={handleSubmitButtonPress}></Button>
            </View>
        </View>
    )
}

export default EditOpportunityForm