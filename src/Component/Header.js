import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import colors from '../styles/colors'


export default function  Header(){
  return(
      <View style={{backgroundColor:colors.themeColor}}> 
         <Text style={styles.headerText}>MY TODO</Text>
      </View>
  )  
}
const styles=StyleSheet.create({
  headerText:{
    fontSize:20,
    marginVertical:5,
    textAlign:'center',
    color:colors.white
  }
})