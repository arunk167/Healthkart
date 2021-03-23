import React from 'react'
import {NavigationContainer} from '@react-navigation/native';   
import {createStackNavigator} from '@react-navigation/stack';

import MainStack from './MainStack';
import AuthSatck from './AuthStack';
import { connect } from 'react-redux';
const Stack=createStackNavigator();
 function Routes(props){
  const {isLoggedIn}=props
    return(
       
        <NavigationContainer>
            <Stack.Navigator>
               
            {isLoggedIn ?<>{MainStack()}</>
             :  <>{AuthSatck()}</>
           }  
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const mapStateToProps=state=>{
    return{
        isLoggedIn:state.cart.isLoggedIn,
    }
}
export default connect(mapStateToProps)(Routes)