import React, { Component } from 'react'
import { Text, View ,FlatList,TextInput,StyleSheet,Alert} from 'react-native'
import AddButton from '../../Component/AddButton'
import Header from '../../Component/Header'
import ListItem from '../../Component/ListItem'
import {onAdd,onDelete,onUpdate} from '../../../action' 
import store from '../../../store' 
import ModalView from '../../Component/ModalView'




export default class Homepage extends Component {
    constructor(props){
        super(props);
        this.state={
            inputText:'', 
            stutus:'',
            id:0,
            isModalVisiable:false,
            isAdd:true,
            item_id:null
            
        }
    }
    componentDidMount(){
        store.subscribe(()=>this.setState({ }))
    }
    _onChangeText=(key)=>{
        return (value)=>{
            this.setState({
                [key]:value
            })
        }
    }
    onItemAdd=()=>{
        
        const {id,inputText,stutus}=this.state;
        this.setState({
            id:id+1
        })
      
        let obj={}
        obj['id']=id
        obj['taskname']=inputText
        obj['stutus']=stutus
        store.dispatch(onAdd(obj))
        this.setState({
            isModalVisiable:false
        })
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
                {text: 'OK', onPress: () => store.dispatch(onDelete(id))},  
            ]  
        ); 
        
        
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
    render() {
        const {inputText,isModalVisiable,isAdd}=this.state
        return (
            
            <View style={{flex:1}}>
                <Header />
               
               <FlatList
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
            }
               
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
