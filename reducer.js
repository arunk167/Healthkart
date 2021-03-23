import types from './types'
const initialState={
    cartArray:[]
    
    
};
export default function counterReducer(state=initialState,action){
    switch(action.type){
        case types.ADD:

          const{newArray,itemIndex}=action.payload
          if(!state.cartArray.includes(newArray[itemIndex]))
          {
              newArray[itemIndex].quantity+=1
              cartArray=[...state.cartArray,newArray[itemIndex]]

          }
          console.log(state.cartArray)
            return{
                ...state,
                cartArray
            }
        // case types.DELETE:
        //     const {newArray,itemIndex}=action.payload
            

        default:
            return state
    }
} 