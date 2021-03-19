import types from './types'
const initialState={
    taskList:[],
};
export default function counterReducer(state=initialState,action){
    switch(action.type){
        case types.ADD:
            const {obj}=action.payload
            return{
                ...state,
                taskList:[...state.taskList,obj]
            }
        case types.DELETE:
            newArray=state.taskList
            newArray=newArray.filter(item=>action.payload.id !==item.id)
            return {
                ...state,
                taskList:newArray
            }
        case types.UPDATE:
            newArray=state.taskList
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
                taskList:newArray

            }
        default:
            return state
    }
} 