import React, { Component } from 'react'
import { Text, Touchable, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux';
import actions from '../../redux/actions'
import { clearUserData } from '../../utils/utils';




 class Profile extends Component {
    onLogout=()=>{
        clearUserData();
        actions.onLogout();
    }
   
    render() {
        const {userData}=this.props
        return (
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text> Profile </Text>
                <TouchableOpacity style={{marginTop:20}} onPress={this.onLogout}>
                    <Text>Logout</Text>
                    
                </TouchableOpacity>
                {/* <Text>ID:{userData.contactDetails.phoneNo}</Text> */}
            </View>
        )
    }
}
const mapStateToProps=state=>{
    return {
        userData:state.cart.userData
    }
}
export default connect(mapStateToProps)(Profile)
