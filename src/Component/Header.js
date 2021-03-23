import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';

import navigationStrings from '../constants/navigationStrings';
import { connect } from 'react-redux';
import colors from '../styles/colors';


function Header(props) {
  const navigation = useNavigation();
  const {cartArray} = props;
  let itemCount=cartArray.length;

  console.log("in header-",cartArray)
  
  return (
    <View style={styles.header}>
      
      <View style={{marginVertical: 10, flexDirection: 'row'}}>
        <Image style={styles.logo1} source={imagePath.humburger} />
        <Image style={styles.logo} source={imagePath.hk_logo} />
        
      </View>
      <View style={{flexDirection: 'row', marginEnd: 7}}>
        {/* <Image style={styles.search} source={imagePath.search} /> */}
        <Image style={styles.search} source={imagePath.notification} />
        <Image style={styles.search} source={imagePath.heart} />
        <View>
          <Text
            style={{position: 'absolute', top: 5, left: 30, color: colors.themeColor}}>
            {itemCount}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.CART, {itemCount})}>
            <Image style={styles.search} source={imagePath.beg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  header_text: {
    fontSize: 20,
    color: 'white',

    marginHorizontal: 18,
  },
  logo: {
    height: 25,
    width: 120,
    marginVertical:1,
    marginStart:1,

    resizeMode: 'contain',
  },
  logo1: {
    height: 16,
    width: 20,
    marginHorizontal: 4,
    marginVertical: 6,
    resizeMode: 'contain',
    marginStart: 15,
    tintColor:colors.themeColor
  },
  search: {
    height: 20,
    width: 20,
    marginHorizontal: 12,
    marginVertical: 12,
    tintColor:colors.themeColor
  },
});
const mapStateToProps=state=>{
  return{
    cartArray:state.cart.cartArray
  }
}
export default connect(mapStateToProps)(Header);
