import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckboxField from 'react-native-checkbox-field';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckboxGroup from 'react-native-checkbox-group'
export default class Form extends Component {
    state = {
        selected: false,
    };

    selectCheckbox = () => {
        this.setState({
            selected: !this.state.selected,
        });
    };

    render() {
        const { selected } = this.state;
        const names=["احمد","خالد","عبدالله","ياسر","عمار"]
    
        // Only onSelect prop is required
        return (
       
<CheckboxGroup
 
   callback = {(selected) => { console.log(selected) }
    }
    iconColor = { "#00a2dd"}
    iconSize = { 30}
    checkedIcon = "ios-checkbox-outline"
    uncheckedIcon = "ios-square-outline"
    checkboxes = {
        [
        {
            label: "احمد", // label for checkbox item
            value: 1, // selected value for item, if selected, what value should be sent?
          // if the item is selected by default or not.
        },
            {
                label: "خالد",
                value: 2
            }, {
                label: "ياسر",
                value: 3
            }, {
                label: "عمار",
                value: 4
            }, {
                label: "علي",
                value: 5
                        },{ label: "علي",
                        value: 6
            }, { label: "علي",
            value: 7
    }, {label: "علي",
    value: 8
},{ label: "علي",
    value: 9
            },{ label: "علي",
    value: 10
            },{ label: "علي",
    value: 11
            },    { label: "علي",
                value: 12
            },   {  label: "علي",
                value: 13
            }, {label: "احمد محمد ",
    value: 14
            },
              ]}
    labelStyle = {{
        marginTop:15,
    color: '#333'
}}
   
rowStyle = {{
    flexDirection: 'row'
    ,
}}
rowDirection = { "column"}
    />
        )
       }
    }
