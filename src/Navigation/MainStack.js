import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import { Cart, Login, OuterScreen, ProductDetail, Signup } from '../Screen';
import OtpVerification from '../Screen/OtpVerification/OtpVerification';
import Homepage from '../Screen/Homepage/Homepage';



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
             <Stack.Screen name={navigationStrings.HOMEPAGE} component={Homepage} 
              options={{
                headerShown:false
              }}/>   
             <Stack.Screen
             name={navigationStrings.PRODUCT_DETAIL}
                component={ProductDetail}
              />  
               <Stack.Screen name={navigationStrings.CART} component={Cart} 
              />  
        </React.Fragment>
    )
}
export default MainStack;