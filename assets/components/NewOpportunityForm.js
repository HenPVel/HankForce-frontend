import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View, Text, Platform} from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function NewOpportunityForm(props) {

const companyCollectionSelect = props.userCompanies.map( company => {
    return(
        {['label']:company.organization_name, ['value']:company.id}
    )
})

console.log(props.addOpportunity)


const [newOppFormData, setNewOppFormData] = useState({
    opp_title:'',
    organization_id:'',
    contact_person:'',
    value:'',
    stage:'',
    expected_close: new Date()
})

function handleTextChange(text, key) {
    setNewOppFormData({...newOppFormData, [key]:text})
}



function handleSubmitButtonPress() {
   props.addOpportunity(newOppFormData)
}



    return(
        <View>
            <View>
                <Text>Opportunity Name:</Text>
                <TextInput
                    placeholder='Opportunity Name'
                    onChangeText={text => handleTextChange(text, 'opp_title')}
                    value={newOppFormData.opp_title}
                />
                <Text>{`Opportunity Value ($):`}</Text> 
                <TextInput
                    placeholder='$ Value'
                    keyboardType='decimal-pad'
                    onChangeText={text => handleTextChange(text, 'value')}
                    value={newOppFormData.value}
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
                />
                <Text>Company Name:</Text> 
                <RNPickerSelect
                    onValueChange={value => handleTextChange(value,'organization_id')}
                    placeholder={{ label: "Select a Company From Existing Database", value:null}}
                    items={companyCollectionSelect}
                    value = {newOppFormData.organization_id}
                />
                <Text>Contact First and Last Name:</Text>
                <TextInput 
                    placeholder='FirstName LastName'
                    onChangeText={text => handleTextChange(text, 'contact_person')}
                    value={newOppFormData.contact_person}
                />
                <Text>Expected Close Date:</Text>
                <DateTimePicker
                    testID="dateTimePicker"
                    value={newOppFormData.expected_close}
                    mode="date"
                    display="default"
                    onChange={(event, date) => handleTextChange(date, 'expected_close')}
                />
                <Button title="Submit" onPress={handleSubmitButtonPress}></Button>
            </View>
        </View>
    )
}


//     t.date "expected_close"
