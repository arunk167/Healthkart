import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet,Image,Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import CartItem from '../../Component/CartItem';
import navigationStrings from '../../constants/navigationStrings';
import store from '../../../store';
import {onDelete} from '../../../action' 
 

export default class Cart extends Component {
  state = {
    totalprice: 0,
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

  addCount = (id) => {
     
    const { data,totalprice, demoprice} = this.props.route.params;
    let newcountData = [...store.getState().cartArray];

    let itemindex = newcountData.findIndex((item) => item.id == id);
    let newQunantity = newcountData[itemindex];  
    newQunantity.quantity += 1;
    let nr = 0;
    for (let i in data) {

      nr += data[i].price * data[i].quantity;
      
    }
    this.setState({
      data: newQunantity,
      totalprice: nr,
    });
  };
  deleteCount = (id) => {
    const {isDisable}=this.state;
    const {data} = this.props.route.params;
    let newcountData = [...store.getState().cartArray];

    let itemindex = newcountData.findIndex((item) => item.id == id);
    let newQunantity = newcountData[itemindex];
    let nr = 0;
    if (newQunantity.quantity > 1) {
      newQunantity.quantity -= 1;

      for (let i in data) {
        nr += data[i].price * data[i].quantity;
      }
    } else {
      for (let i in data) {
        nr += data[i].price * data[i].quantity;
      }
     
    }
    
    this.setState({
      data: newQunantity,
      totalprice: nr,
      isDisable:true
    });
  };
 
  onItemRemove=(id)=>{
    Alert.alert(  
        'Delete Task',  
        'Are you sure to delete?',  
        [  
            {  
                text: 'Cancel',   
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => store.dispatch(onDelete(id))},  
        ]  
    ); 
    
    
}

  renderEmptyContainer = () => {
   
    return (
      <View style={{height: 300,  justifyContent: 'center',alignItems: 'center'}}>
        <Image  source={imagePath.beg} style={{height:100,width:100,tintColor: '#FF3E6C'}}/>
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
  componentDidMount() {
    
        store.subscribe(()=>this.setState({ }))
    
   let data=store.getState().cartArray
    let nr = 0;
    for (let i in data) {
      nr += data[i].price * data[i].quantity;
    }
    this.setState({
      totalprice: nr,
    });
    
  }

  render() {
    const {data} = this.props.route.params;
    const {totalprice} = this.state;
    const {navigation} = this.props;
   

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={this.flatListItemSeparator}
          data={store.getState().cartArray}
          ListEmptyComponent={this.renderEmptyContainer}
        //   ListFooterComponent={this.footer}
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
const styles = StyleSheet.create({
  totalprice: {
    backgroundColor: '#FF3E6C',
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
});
