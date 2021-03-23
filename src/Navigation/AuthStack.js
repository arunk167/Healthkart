import React from 'react'
import {createStackNavigator} from  '@react-navigation/stack'
import navigationStrings from '../constants/navigationStrings';
import { Login, Signup ,OuterScreen, OtpVerification} from '../Screen';

const Stack=createStackNavigator();
function AuthSatck(){
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.OUTERSCREEN} component={OuterScreen}
        options={{
          headerShown: false,
        }}
      />
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
            <Stack.Screen name={navigationStrings.SIGNUP} component ={Signup}/>
            <Stack.Screen name={navigationStrings.OTPVERIFICATION} component ={OtpVerification}/>
        </React.Fragment>
    )
}
export default AuthSatck ;