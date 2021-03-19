import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,Image } from 'react-native'
import imagePath from '../constants/imagePath'
import colors from '../styles/colors'


export default function ListItem(props) {
    const {data,onItemRemove,onItemUpdate,onClickUpdate}=props
    return (
        <View style={styles.parentView}>
           
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.detailtext}>Id :{data.id}</Text>
            <TouchableOpacity onPress={()=>onItemRemove(data.id)} >
           <Image source={imagePath.delete} style={styles.actionImage}/>
           </TouchableOpacity>
            </View>
            <Text style={styles.detailtext}>Task : {data.taskname}</Text>
           <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <Text style={styles.detailtext}>Status : {data.stutus}</Text>
           <TouchableOpacity onPress={()=>onClickUpdate(data.id)} >
           <Image source={imagePath.edit} style={styles.actionImage}/>
           </TouchableOpacity>
           </View>
          
        </View>
    )
}
const styles=StyleSheet.create({
    parentView:{
       marginVertical:5,
       marginHorizontal:10,
       backgroundColor:'white'
       
    },
    text:{
        fontSize:16,
        color:colors.white,
        marginHorizontal:20,
        marginVertical:5
    },
    detailtext:{
        fontSize:20,
        color:colors.themeColor,
        marginHorizontal:5
    },
    actionButton:{
       
        marginHorizontal:5,
       
        backgroundColor:colors.themeColor,
        borderRadius:15
       

    },
    
    actionImage:{
        height:25,
        width:25,
        tintColor:colors.themeColor,
        marginVertical:10,
        marginHorizontal:10
    }
})
