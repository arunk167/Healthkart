import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet,Image,Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import CartItem from '../../Component/CartItem';
import navigationStrings from '../../constants/navigationStrings';
 
import {connect} from 'react-redux'
import store from '../../redux/store';
import types from '../../redux/types';
import index from '../../redux/actions'
import action from '../../redux/actions';



 class Cart extends Component {
  state = {
      isDisable:false,
  };
 
  flatListItemSeparator = () => {
    return (
      <View            
        style={{                    
          height: 4,
          width: '100%',
          backgroundColor: '#DCDCDC',
        }}
      />
    );
  };
  addCount=(add_id)=>{
 
    
      action.onIncrementCount(add_id)
  }

  deleteCount=(remove_id)=>{
    const{cartArray}=this.props
    let index=cartArray.findIndex(item=>item.id===remove_id)
    if(cartArray[index].quantity>=2) 
   {

      action.onDecrementCount(remove_id)
   }
    else{
      this.onItemRemove(remove_id)
    }
  }
  
  
 
  onItemRemove=(id)=>{
    Alert.alert(  
        'Delete Task',  
        'Are you sure to delete?',  
        [  
            {  
                text: 'Cancel',   
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => action.onItemDelete(id)},  
        ]  
    );     
}

  renderEmptyContainer = () => {
   
    return (
      <View style={{height: 300,  justifyContent: 'center',alignItems: 'center'}}>
        <Image  source={imagePath.beg} style={{height:100,width:100,tintColor: colors.themeColor}}/>
        <Text
          style={{
            color: colors.themeColor,
            fontSize:20, 
            marginTop:10
          }}>
         Hey,it feels so light!
        </Text>
        <Text style={{color:colors.textGray}}>
          There is nothing in your beg.Let's add some items
        </Text>
      </View>
    );
  };
 
  componentDidMount(){
    action.totalPrice(this.props.cartArray)
  }
  footer=()=>{
      
         if(this.props.cartArray.length==0){
            return (
              <View></View>
            )
         }
         else{
           return(
            <View style={styles.paymentDetailsView}>
               <View style={styles.lineView}></View>
          <Text style={styles.priceDetails}>ORDER SUMMARY</Text>
          <View style={styles.lineView}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.price}>Total Price</Text>
            <Text style={styles.price}>Rs.{this.props.totalprice}</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.price}>Shipping</Text>
            <Text style={styles.deliverycharge}>FREE</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.price}>Coupon Discount</Text>
            <Text style={styles.deliverycharge}>Apply Coupon</Text>
          </View>
          <View style={styles.lineView}></View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.totalPrice}>Total Amount</Text>
            <Text style={styles.price}>Rs.{this.props.totalprice}</Text>
          </View>
        </View>
           )
         }
       
  }

  render() {
    const {data} = this.props.route.params;
    
    const {navigation} = this.props;
   const {cartArray,totalPrice}=this.props

 

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={this.flatListItemSeparator}
          data={cartArray}
          ListEmptyComponent={this.renderEmptyContainer}
          ListFooterComponent={this.footer}
          renderItem={({item}) => (
            <CartItem
              data={item}
              addCount={this.addCount}
              onItemRemove={this.onItemRemove}
              deleteCount={this.deleteCount}
              removeItem={this.removeItem}
              isDisable={this.isDisable}
              

            />
          )}
        />
         {/* <Text>Total Amount :{this.props.totalprice}</Text> */}
        <TouchableOpacity
         >
          <View style={styles.totalprice}>
            <Text style={styles.totalpriceText}>CHECK OUT</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps=state=>{
   return {

     cartArray:state.cart.cartArray,
     totalprice:state.cart.totalPrice

   }
}

export default connect(mapStateToProps)(Cart)

const styles = StyleSheet.create({
  totalprice: {
    backgroundColor:colors.themeColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  totalpriceText: {
    fontSize: 20,
    color: 'white',
  },
  footerView:
    {flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,
  
  },
    footerText:{
      fontSize:18,
      color:colors.themeColor
    },
    paymentDetailsView: {
      height: '35%',
      marginHorizontal: 10,
      backgroundColor: 'white',
      marginTop: 10,
  
      borderRadius: 10,
     
    },
    priceDetails: {
      color:colors.themeColor,
      fontSize: 15,
      marginHorizontal: 15,
      marginVertical: 10,
    },
    lineView: {
      height: 0.5,
      backgroundColor: 'lightgrey',
      marginVertical: 5,
    },
    price: {
      fontSize: 15,
      marginHorizontal: 15,
      marginVertical: 10,
    },
    totalPrice: {
      fontSize: 15,
      marginHorizontal: 15,
      marginVertical: 10,
    },
    deliverycharge: {
      color: 'green',
      fontSize: 15,
      marginHorizontal: 15,
      marginVertical: 10,
    },
  
}
);
