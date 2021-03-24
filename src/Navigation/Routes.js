import React from 'react'
import {NavigationContainer} from '@react-navigation/native';   
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthSatck from './AuthStack';
import { connect } from 'react-redux';
const Stack=createStackNavigator();
 function Routes(props){
  const {userData}=props
  console.log("routeeerrrrrrrrrrrrrrrr",userData)
    return(
       
        <NavigationContainer>
            <Stack.Navigator>
               
            {userData.accessToken?<>{MainStack()}</>
             :<>{AuthSatck()}</>
           }  
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps=state=>{
    return{
        userData:state.auth.userData
    }
}
export default connect(mapStateToProps)(Routes)