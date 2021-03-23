import React, { Component } from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import actions from '../../redux/actions'



export default class Profile extends Component {
    onLogout=()=>{
        actions.onLogout();
    }
    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text> Profile </Text>
                <TouchableOpacity style={{marginTop:20}} onPress={this.onLogout}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
