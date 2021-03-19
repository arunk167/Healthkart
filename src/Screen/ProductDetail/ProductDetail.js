import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import navigationStrings from '../../constants/navigationStrings';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {navigation}=this.props;
    const {selectedItem} = this.props.route.params;
    return (
      <View style={{flex: 1}}>
        {/* <DetailHeader /> */}
        <ScrollView>
          <Image
            style={styles.productImage}
            source={{uri: selectedItem.image}}
          />
          <View style={{backgroundColor: 'white'}}>
            <Text style={styles.productName}>{selectedItem.name}</Text>
            <Text style={{color: 'gray', marginStart: 10}}>
              {selectedItem.detail}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Rs.{selectedItem.price}</Text>
              <Text style={styles.lastprice}>Rs.{selectedItem.lastprice}</Text>
            </View>
            <Text style={styles.tax}>inclusive all taxes</Text>
          </View>
          <View style={{marginTop: 10, backgroundColor: 'white'}}>
            <Text style={{marginHorizontal: 12, margin: 5}}>
              Easy 30 days returns and exchanges
            </Text>
            <Text style={styles.changePolicy}>
              Choose to return or exchange for a different size within 30 days
            </Text>
          </View>
          <View style={{marginTop: 10, backgroundColor: 'white'}}>
            <View style={styles.selectSizeText}>
              <Text style={{color: 'gray', fontSize: 15}}>SELECT SIZE</Text>
              <Text style={{color: '#FF3E6C', fontSize: 15}}>SIZE CHART</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 5,
                marginVertical: 10,
              }}>
              <View style={styles.sizeView}>
                <Text style={styles.sizeText}>S</Text>
              </View>
              <View style={styles.sizeView}>
                <Text style={styles.sizeText}>M</Text>
              </View>
              <View style={styles.sizeView}>
                <Text style={styles.sizeText}>L</Text>
              </View>
              <View style={styles.sizeView}>
                <Text style={styles.sizeText}>XL</Text>
              </View>
              <View style={styles.sizeView}>
                <Text style={styles.sizeText}>XXL</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={{marginHorizontal: 15}}
           onPress={()=>navigation.navigate(navigationStrings.HOMEPAGE , {productDetail:selectedItem.id})}>
            <Button
              title="ADD TO CART"
              color="#FF3E6C"
              style={{marginBottom: 10}}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    marginStart: 10,
  },
  sizeText: {
    fontSize: 15,
  },
  sizeView: {
    borderWidth: 1,
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  lastprice: {
    fontSize: 15,
    marginStart: 10,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  productImage: {height: 450, width: '100%'},
  productName: {
    fontSize: 17,
    marginStart: 10,
    marginTop: 5,
    fontStyle: 'italic',
  },
  tax: {
    fontSize: 13,
    color: 'green',
    marginStart: 10,
    marginBottom: 5,
  },
  selectSizeText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  changePolicy: {
    marginHorizontal: 12,
    marginBottom: 5,
    color: 'gray',
    fontSize: 14,
  },
});
