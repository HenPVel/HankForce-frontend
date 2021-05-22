import React from 'react';
import {StyleSheet, Button, TextInput, View, Text} from 'react-native';
import { Formik } from 'formik'
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

export default function NewOpportunityForm() {

    return(
        <View>
            <View>
                <TextInput
                    placeholder='Opportunity Title'
                    onChangeText={props.handleChange('opp_title')}
                    value={props.values.title}
                />
                <TextInput
                    placeholder='Opportunity Title'
                    onChangeText={props.handleChange('opp_title')}
                    value={props.values.title}
                />
            </View>
        </View>
    )
}

// t.string "opp_title"
//     t.integer "organization_id"
//     t.string "contact_person"
//     t.float "value"
//     t.string "stage"
//     t.date "expected_close"
//     t.datetime "created_at", precision: 6, null: false
//     t.datetime "updated_at"