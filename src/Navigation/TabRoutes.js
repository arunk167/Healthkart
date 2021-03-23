import React, {Component} from 'react';
import { Text, View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import imagePath from '../constants/imagePath'
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import { Consult, Homepage, Profile } from '../Screen';



const Tab = createBottomTabNavigator();

function TabRoutes({navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name={navigationStrings.HOMEPAGE} component={Homepage}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.home_active}
            style={{
              width: size,
              height: size,
              tintColor: focused ? colors.themeColor : 'black',
            }}
          />
        ),
      }} />
       <Tab.Screen name={navigationStrings.CONSULT} component={Consult}
      options={{
        tabBarLabel: 'Consult',
       
         
        
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.workout}
            style={{
              width: size,
              height:size,
              tintColor: focused ? colors.themeColor : 'black',
            }} 
          />
        ),
      }} />
      <Tab.Screen name={navigationStrings.PROFILE} component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused, color, size}) => (
          <Image
            source={imagePath.profile_active}
            style={{
              width: size,
              height: size,
              tintColor: focused ? colors.themeColor : 'black',
            }}
          />
        ),
      }}
      />
      
     
    </Tab.Navigator>
  );
}


export default TabRoutes;