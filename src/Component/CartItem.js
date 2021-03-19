import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import store from '../../store';

function CartItem(props) {
  const {data,addCount, deleteCount,onItemRemove,isDisable} = props;
 
 let  item_total =data.price *data.quantity
  


  return (
    <View>
      <View style={styles.parentView}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View>
          <Text>{data.name}</Text>
          <Text style={styles.detailText}>{data.detail}</Text>
          <View style={styles.price}>
            <Text>Rs.{data.price}</Text>
            <Text style={styles.lastprice}>Rs. {data.lastprice}</Text>
          </View>
          <Text style={{fontSize:18,color:'pink'}}>Rs.{item_total}</Text>
          <View style={styles.counterView}>
            <TouchableOpacity onPress={() => deleteCount(data.id)} isDisable={isDisable}>
              <Text style={styles.counter}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counter}>{data.quantity}</Text>
            <TouchableOpacity onPress={() => addCount(data.id)}>
              <Text style={styles.counter}>+</Text>
            </TouchableOpacity>
            
          </View>
          
        </View>
      </View>

      <View style={styles.cartText}>
        <TouchableOpacity onPress={()=>onItemRemove(data.id)} >
        <Text style={styles.removeText}>REMOVE</Text>
        </TouchableOpacity>
        <Text style={styles.removeText}>MOVE TO WISHLIST</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 140,
    resizeMode: 'contain',
  },
  parentView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  detailText: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    flexDirection: 'row',
  },
  lastprice: {
    textDecorationLine: 'line-through',
    marginStart: 20,
    color: 'red',
  },
  removeText: {
    marginHorizontal: 30,
    padding: 15,
  },
  cartText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: 0.2,
    borderColor: 'gray',
    marginHorizontal: 15,
  },
  counter: {
    fontSize: 20,
    padding: 4,
    justifyContent:'center',
    alignItems:'center'
  },
  counterView: {
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 30,
    marginTop:40,
    justifyContent: 'space-between',
  },
});

export default CartItem;
