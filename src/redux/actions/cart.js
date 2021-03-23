
import store from "../store";
import types from "../types";

const {dispatch}=store
export const onAddCart=(dataobj)=>{
    dispatch({
            type:types.ADD,
            payload:{dataobj}
           
    })
}


export const onIncrementCount=(add_id)=>{
    dispatch( {
        type:types.ON_QUANTITY_ADD,
        payload:{add_id}
    })
}
export const onDecrementCount=(remove_id)=>{
    dispatch( {
        type:types.ON_QUANTITY_REMOVE,
        payload:{remove_id}
    })
}

export const onItemDelete=(id)=>{
    dispatch( {
        type:types.DELETE,
        payload:{id}
    })
}
export const totalPrice=(data)=>{
   
  dispatch( {
        type:types.TOTAL_PRICE,
        payload:{data}
    })
    
}