import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import { Login, OuterScreen, Signup } from '../Screen';
import OtpVerification from '../Screen/OtpVerification/OtpVerification';



const Stack =createStackNavigator();
function MainStack(){
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.OUTERSCREEN} component={OuterScreen} 
               options={{
                headerShown:false
            }}
            /> 
            <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} 
        
             />       
             <Stack.Screen name={navigationStrings.LOGIN} component={Login} />  
             <Stack.Screen name={navigationStrings.OTPVERIFICATION} component={OtpVerification} />   
        </React.Fragment>
    )
}
export default MainStack;