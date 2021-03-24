import React, {Component} from 'react';
import {Text, View, FlatList, TextInput, StyleSheet, Alert, ScrollView,Image} from 'react-native';

import MenProducts from '../../Component/MenProducts';
import navigationStrings from '../../constants/navigationStrings';
import {connect} from 'react-redux';




import Header from '../../Component/Header';
import store from '../../redux/store';
import types from '../../redux/types';
import action from '../../redux/actions';
import WrapperContainer from '../../Component/WrapperContainer';
import Carousel from '../../Component/Carousel';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { color } from 'react-native-reanimated';





class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productArray: [
        {
          id: 0,
          name: 'Peanut Butter',
          detail: '0.750 kg, Unsweetened Crunchy',
          price: 447,
          quantity: 0,
          lastprice: 999,
          image:
            'https://img4.hkrtcdn.com/11965/prd_1196443-MuscleBlaze-High-Protein-Natural-Peanut-Butter-Unsweetened-0.750-kg-Crunchy_c_m.jpg',
        },
        {
          id: 1,
          name: 'Huetrap',
          detail: 'MB Fuel One Vitamin C 500mg',
          price: 519,
          quantity: 0,
          lastprice: 999,
          image:
            'https://img4.hkrtcdn.com/13528/prd_1352733_c_m.jpg',
        },
        {
          id: 2,
          name: 'MB Fuel',
          quantity: 0,
          detail: 'MB Fuel One Vitamin C 500mg',
          price: 435,
          lastprice: 999,
          image:
            'https://img2.hkrtcdn.com/12747/prd_1274641_c_m.jpg',
        },
        {
          id: 3,
          name: 'INLIFE Natural',
          detail: 'INLIFE Natural Plant Based Vitamin C',
          price: 550,
          quantity: 0,
          lastprice: 999,
          image:
            'https://img2.hkrtcdn.com/12747/prd_1274641_c_m.jpg',
        },
        {
          id: 4,
          name: 'HRX by Hrithik Roshan',
          detail: 'Meadbery Lung Detox Vitamin C',
          price: 799,
          quantity: 0,
          lastprice: 999,
          image:
            'https://m.media-amazon.com/images/I/61cnVP6c4dL._AC_UL480_FMwebp_QL65_.jpg',
        },
        {
          id: 5,
          name: 'Meadbery Lung Detox',
          detail: 'Meadbery Lung Detox',
          price: 456,
          quantity: 0,
          lastprice: 999,
          image:
            'https://img6.hkrtcdn.com/13060/prd_1305995-Nouriza-Peanut-Butter-100-Natural-Unsweetened-1-kg-Crunchy_o.jpg',
        },
      ],
      ayurvedic: [
        {
          id: 10,
          name: 'Peanut Butter',
          detail: '0.750 kg, Unsweetened Crunchy',
          price: 317,
          quantity: 0,
          lastprice: 599,
          image:
            'https://img2.hkrtcdn.com/12643/prd_1264201_o.jpg',
        },
        {
          id: 11,
          name: 'Huetrap',
          detail: 'MB Fuel One Vitamin C 500mg',
          price: 219,
          quantity: 0,
          lastprice: 499,
          image:
            'https://img4.hkrtcdn.com/13528/prd_1352733_c_m.jpg',
        },
        {
          id: 12,
          name: 'MB Fuel',
          quantity: 0,
          detail: 'MB Fuel One Vitamin C 500mg',
          price: 235,
          lastprice: 699,
          image:
            'https://img2.hkrtcdn.com/12747/prd_1274641_c_m.jpg',
        },
        {
          id: 13,
          name: 'INLIFE Natural',
          detail: 'INLIFE Natural Plant Based Vitamin C',
          price: 520,
          quantity: 0,
          lastprice: 799,
          image:
            'https://img2.hkrtcdn.com/12747/prd_1274641_c_m.jpg',
        },
        {
          id: 14,
          name: 'HRX by Hrithik Roshan',
          detail: 'Meadbery Lung Detox Vitamin C',
          price: 799,
          quantity: 0,
          lastprice: 999, 
          image:
            'https://m.media-amazon.com/images/I/61cnVP6c4dL._AC_UL480_FMwebp_QL65_.jpg',
        },
        {
          id: 15,
          name: 'Meadbery Lung Detox',
          detail: 'Meadbery Lung Detox',
          price: 456,
          quantity: 0,
          lastprice: 899,
          image:
            'https://img6.hkrtcdn.com/13060/prd_1305995-Nouriza-Peanut-Butter-100-Natural-Unsweetened-1-kg-Crunchy_o.jpg',
        },
      ],
    };
  }

 
  onItemAdd = (data) => {
     
    action.onAddCart(data)
    

  };
  datapass = (data) => {

    const {navigation} = this.props;
    navigation.navigate(navigationStrings.PRODUCT_DETAIL, {
      selectedItem: data,
    });
  };
  render() {
    const {
      ayurvedic,
      productArray,
      itemCount,
    } = this.state;
    console.log("UserData=>>>",this.props.userData)
    return (
      <WrapperContainer>
        <View style={{flex: 1}}>
        <Header itemCount={itemCount} />
        <View style={styles.searchBarView}>
                    <Image source={imagePath.search} style={styles.searchIcon} resizeMode="contain"/>
                    <TextInput style={styles.searcTextInput} placeholder="Search for products and brands"></TextInput>
                  
                </View>
        <ScrollView>
          <Carousel />
         <View>
           <Text style={{marginStart:15,fontSize:20}}>Flash Sale</Text>
         </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id.toString()}
          data={productArray}
          renderItem={({item}) => (
            <MenProducts
              data={item}
              onItemAdd={this.onItemAdd}
              datapass={this.datapass}
            />
          )}
         
        />
        <View>
           <Text style={{marginStart:15,fontSize:20,textAlign:'center'}}>Top Categories</Text>
         </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.name.toString()}
          data={ayurvedic}
          renderItem={({item}) => (
            <MenProducts
              data={item}
              onItemAdd={this.onItemAdd}
              datapass={this.datapass}
            />
          )}
         
        />
        <View>
           <Text style={{marginStart:15,fontSize:20}}>Trending Now</Text>
         </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.name.toString()}
          data={ayurvedic}
          renderItem={({item}) => (
            <MenProducts
              data={item}
              onItemAdd={this.onItemAdd}
              datapass={this.datapass}
            />
          )}
         
        />
        </ScrollView>
      </View>
      </WrapperContainer>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  searchBarView:{

   borderColor:colors.textGreyB,
   
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    borderWidth:0.7,
    marginHorizontal:5,
    marginVertical:4,
    borderRadius:5
   
    
}, searchIcon:{
  height:18,
  width:18,
  tintColor:colors.textGreyB
},

searcTextInput:{
  
  fontSize:15,
 
  paddingVertical:5
},
});
const mapStateToProps = state => {
  return {
    cartArray: state.cart.cartArray,
    userData:state.cart.userData
  };
};

export default connect(mapStateToProps)(Homepage);
