
import types from "../types";
import {showMessage} from 'react-native-flash-message';
import { clearUserData } from "../../utils/utils";
const initialState={
    cartArray:[],
    totalPrice:0,
    isLoggedIn:false
    
    
};
const amount=(actionArray)=>{
  let newPrice=0
  for(let i in actionArray){
  newPrice+=actionArray[i].price*actionArray[i].quantity
}
return newPrice;


}
export default function  (state=initialState,action){
     

    switch(action.type){
        case types.ADD:

          
          const {dataobj}=action.payload
           if(!state.cartArray.includes(dataobj)){
             dataobj.quantity+=1
             cartArray=[...state.cartArray,dataobj]
           }
           else{
              showMessage({
                type: 'info',
                icon: 'info',
                message: 'Already added to cart',
              });
            }
           return{
             ...state,
             cartArray
           }

          // if(!state.cartArray.includes(newArray[itemIndex]))
          // {
          //   newArray[itemIndex].quantity+=1
          //     cartArray=[...state.cartArray,newArray[itemIndex]]
             
          // }
          // else{
          //   showMessage({
          //     type: 'info',
          //     icon: 'info',
          //     message: 'Already added to cart',
          //   });
          // }
        
          //   return{
          //       ...state,
          //       cartArray
          //   }
        case types.DELETE:
            const {id}=action.payload
            let array=[...state.cartArray]
            let deleteitemIndex=array.findIndex(item=>item.id===id)
            array[deleteitemIndex].quantity=0
            let resultArray=array.filter(item=>item.id!==id)
            cartArray=[...resultArray]
            
            
            let dprice=amount(cartArray)

            return{
                ...state,
                cartArray,
                totalPrice:dprice
            }
        case types.ON_QUANTITY_ADD:
            const {add_id}=action.payload
           
            let newQuantityArray=[...state.cartArray]
            let index=newQuantityArray.findIndex(item=>item.id===add_id)
          
            newQuantityArray[index].quantity=newQuantityArray[index].quantity+1
           
            cartArray=[...newQuantityArray]
            let total=amount(cartArray)
            
            
            return{
              ...state,
              cartArray,
              totalPrice:total
            }
            case types.ON_QUANTITY_REMOVE:
                const {remove_id}=action.payload
                
                let QuantityArrayRemove=[...state.cartArray]
                let item_index=QuantityArrayRemove.findIndex(item=>item.id===remove_id)
              
                QuantityArrayRemove[item_index].quantity=QuantityArrayRemove[item_index].quantity-1
               
                cartArray=[...QuantityArrayRemove]
                let rtotal=amount(cartArray)
                
                return{
                  ...state,
                  cartArray,
                  totalPrice:rtotal
                }
            case types.TOTAL_PRICE:
              let price=0
             
             const {data}=action.payload
            
             for (let i in data){
               price=price+data[i].price*data[i].quantity
              
             }
             return {
               ...state,
               totalPrice:price
             }
             case types.LOGIN:
              // const {userData}={...action.payload}
            
  
              return {
                  ...state,
                  // userData,
                  // isLoggedIn:true
              }
          case types.ISLOGIN:
  
              const {res}={...action.payload}
             
              
              return {
                  ...state,
                  res,
                  isLoggedIn:true
              }
            
          case types.ONLOGOUT:
             clearUserData();
            return {
              ...state,
              isLoggedIn:false
            }
            case types.ONOTPVERIFY :
              const {userData}={...action.payload}
              return {
                  ...state,
                  userData,
                  isLoggedIn:true
              }
        default:
          return state
    }
}