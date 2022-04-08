import React from 'react'
import { View ,Animated, StyleSheet} from 'react-native'
import Picture from "../assets/download.jpg"
import AwesomeButtonRick  from "react-native-really-awesome-button";

class App extends React.Component {
 
     page = StyleSheet.create({
        container: {
            flex: 1,
            padding: 24,
            backgroundColor: '#fff',
        },
        text: {
   
        marginBottom:40,
        marginRight:20
        },
        button1:{
            
        }
    });

    render() {
      
        return (<View>
            <AwesomeButtonRick   style={this.page.text} type="primary">تحضير الطلاب</AwesomeButtonRick>
            <AwesomeButtonRick style={this.page.text} type="secondary">الجلسات القادمة</AwesomeButtonRick>
            <AwesomeButtonRick style={this.page.text} type="secondary">رسائل</AwesomeButtonRick>
            <AwesomeButtonRick style={this.page.text} type="secondary">انشاء حلقة</AwesomeButtonRick>
        </View>
        )
    }
}

export default App