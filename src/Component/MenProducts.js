import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';


import imagePath from '../constants/imagePath';
import colors from '../styles/colors';

 function MenProducts(props) {
  const {data, datapass,  onItemAdd} = props;
  const {cartArray}=props
  return (
    <View>
      <View style={{marginHorizontal: 10, marginVertical: 10}}>
        <TouchableOpacity onPress={() => datapass(data)}>
          <Image style={styles.image} source={{uri: data.image}} />
        </TouchableOpacity>
        <Text style={{fontStyle: 'italic'}}>{data.name}</Text>
        <Text style={{fontSize: 10, color: 'gray'}}>{data.detail}</Text>
        <Text style={{marginBottom: 5}}>Rs.{data.price}</Text>
       {!cartArray.includes(data)?
        <Button
          title="Buy Now" 
          color={colors.themeColor}
          onPress={() =>onItemAdd(data)}
        /> :
        <Button
        title="Added in cart" 
        color={colors.themeColor}
        onPress={() =>onItemAdd(data)}
      />}
      </View>
    </View>
  );
}
const mapStateToProps = state => {
  return {
    cartArray: state.cart.cartArray,
  };
};

export default connect(mapStateToProps)(MenProducts);
const styles = StyleSheet.create({
  image: {
    height: 180,
    width: 160,
  },
});
