import React, { Component } from 'react'
import { Text, View ,FlatList,TextInput,StyleSheet,Alert} from 'react-native'

import MenProducts from '../../Component/MenProducts';
import navigationStrings from '../../constants/navigationStrings';



import Header from '../../Component/Header'

import {onAdd,onDelete,onUpdate} from '../../../action' 
import store from '../../../store' 






export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            inputText:'', 
            stutus:'',
            itemCount:0,
            id:0,
            isModalVisiable:false,
            isAdd:true,
            item_id:null,
            productArray: [
                {
                  id: 0,
                  name: 'HERE&NOW',
                  detail: 'Men Priented Round Neck T-shirt',
                  price: 447,
                  quantity:1,
                  lastprice: 999,
                  image:
                    'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg',
                },
                {
                  id: 1,
                  name: 'Huetrap',
                  detail: 'Men Priented Round Neck T-shirt',
                  price: 519,
                  quantity:1,
                  lastprice: 999,
                  image:
                    'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg',
                },
                {
                  id: 2,
                  name: 'Roadster',
                  quantity:1,
                  detail: 'Men Priented Round coller T-shirt',
                  price: 435,
                  lastprice: 999,
                  image:
                    'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12003948/2020/7/27/5555b83c-80e4-42ef-9477-7f8adc96ce171595840861827-Roadster-Men-Rust-Printed-Round-Neck-T-shirt-487159584085982-1.jpg',
                },
                {
                  id: 3,
                  name: 'Nautica',
                  detail: 'Men Priented Round Neck T-shirt',
                  price: 550,
                  quantity:1,
                  lastprice: 999,
                  image:
                    'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11630290/2020/7/8/41d7ce6d-37cf-4fcc-9564-ebe97c7c393a1594198655634-Nautica-Men-Red-Solid-Round-Neck-T-shirt-6191594198653845-1.jpg',
                },
                {
                  id: 4,
                  name: 'HRX by Hrithik Roshan',
                  detail: 'Yellow Printed Round Neck T-Shirt',
                  price: 799,
                  quantity:1,
                  lastprice: 999,
                  image:
                    'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg',
                },
                {
                  id: 5,
                  name: 'Louis Philippe Sport',
                  detail: 'Men Priented Round Neck T-shirt',
                  price: 456,
                  quantity:1,
                  lastprice: 999,
                  image:
                    'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12390256/2020/9/29/7e467ca7-a127-42c6-be62-dc4b837e66a51601352033431-Louis-Philippe-Sport-Men-Tshirts-541601352032002-1.jpg',
                },
              ],
            
        }
    }

    // componentDidMount(){
    //     store.subscribe(()=>this.setState({ }))
    // }
    _onChangeText=(key)=>{
        return (value)=>{
            this.setState({
                [key]:value
            })
        }
    }
    onItemAdd=(id)=>{
        
        const {productArray,itemCount}=this.state;
        let cartArray=store.getState().cartArray
       
        let obj={}
        obj['id']=productArray[id].id
        obj['name']=productArray[id].name
        obj['price']=productArray[id].price
        obj['image']=productArray[id].image
        obj['lastprice']=productArray[id].lastprice
        obj['quantity']=productArray[id].quantity
        store.dispatch(onAdd(obj))
        this.setState({
            itemCount:store.getState().cartArray.length
        })
       
        console.log(itemCount)
    }
    

    onItemUpdate=()=>{
        const {item_id,inputText,stutus}=this.state
        store.dispatch(onUpdate(item_id,inputText,stutus))
        this.setState({
            isModalVisiable:false
        })
    }
    onClickAdd=()=>{
        this.setState({
            isModalVisiable:true,
            isAdd:true
        })

    }
    onClickUpdate=(id)=>{
       
        this.setState({
            isModalVisiable:true,
            isAdd:false,
            item_id:id
        })
    }
    onCloseModal=()=>{
        this.setState({
            isModalVisiable:false
        })

    }
    datapass = (id) => {
        const {navigation} = this.props;
        const {productArray, addCart, itemCount} = this.state;
        let newArray = [...productArray];
        navigation.navigate(navigationStrings.PRODUCT_DETAIL, {selectedItem: newArray[id]});
      };
    render() {
        const {inputText,isModalVisiable,isAdd,productArray,datapass,itemCount}=this.state
        return (
            
            <View style={{flex:1}}>
                <Header  itemCount={itemCount}/>
               
               {/* <FlatList
                data={store.getState().taskList}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                    return <ListItem data={item} onItemRemove={this.onItemRemove}  onItemUpdate={this.onItemUpdate}  onClickUpdate={this.onClickUpdate}/>
                }}
               />
               <View style={styles.button}>
               <AddButton onClickAdd={this.onClickAdd}/> 

               </View>
               {isAdd?
                 <ModalView _onChangeText={this._onChangeText}  isModalVisiable={isModalVisiable}  
               
                 onCloseModal={this.onCloseModal}  onItemAction={this. onItemAdd} buttonText={'Add'}
                 />:
                 <ModalView _onChangeText={this._onChangeText}  isModalVisiable={isModalVisiable} 
               
                 onCloseModal={this.onCloseModal}  onItemAction={this.onItemUpdate} buttonText={'Update'}
                 />
            } */}
            <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.name.toString()}
            data={productArray}
            renderItem={({item}) => (
              <MenProducts
                data={item}
                onItemAdd={this.onItemAdd}
                datapass={this.datapass}
                
                
               
              />
            )}
            numColumns={2}
          />
               
            </View>
        )
    }
}
const styles=StyleSheet.create({
    button:{
        position:'absolute',
        bottom:0,
        right:0
    }
})
