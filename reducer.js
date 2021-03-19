import types from './types'
const initialState={
    cartArray:[],
};
export default function counterReducer(state=initialState,action){
    switch(action.type){
        case types.ADD:
            const {obj}=action.payload
            console.log(state.cartArray)
            return{
                ...state,
                cartArray:[...state.cartArray,obj]
            }
        case types.DELETE:
           let newArray=state.cartArray
            newArray=newArray.filter(item=>action.payload.id !==item.id)
            return {
                ...state,
                cartArray:newArray
            }
        case types.UPDATE:
            newArray=state.cartArray
            console.log(action.payload.id)
            let elementsIndex = newArray.findIndex(
                (element) => element.id ==action.payload.id,
              );
              
              newArray[elementsIndex] = {
                ...newArray[elementsIndex],
                taskname:action.payload.updatedtext,
                stutus:action.payload.status

              };

            return {
                ...state,
                cartArray:newArray

            }
        default:
            return state
    }
} 