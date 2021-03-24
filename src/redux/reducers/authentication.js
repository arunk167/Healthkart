import types from "../types"



const initialstate={
    userData:{}
}

export default function counterReducer(state=initialstate,action) {
    switch (action.type)
    {
       
            case types.ONLOGOUT:
               
              return {
                ...state,
                userData:{}
              }
            case types.ONOTPVERIFY :
               const userData={...action.payload}         
               console.log("reducerUSER Data ON otp verify",userData)
                return {
                    ...state,
                   userData
                   
  
                }
                
          default:
          {
            return {
                ...state
            }
          }
    }
     
}