import React from 'react'
import {View,Text, TouchableOpacity, Image, StyleSheet} from "react-native";
import colors from '../styles/colors';


export default function AddButton(props) {
    const {onClickAdd,onOpenModal}=props
    return(
      
            <TouchableOpacity style={styles.rightArrowTouch} onPress={onClickAdd} >
           <Text style={styles.rightArrow}>Add</Text>
        </TouchableOpacity>
      
    )
}
const styles= StyleSheet.create({
    rightArrow:{
        height:20,
        width:30,
        fontSize:15,
        color:colors.white
       
       
    },
    rightArrowTouch:{
        height:50,
        width:50,
        borderRadius:30,
        backgroundColor:colors.themeColor,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        marginVertical:10
    }
})
