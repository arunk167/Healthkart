
import { LOGIN, OTPVERIFY, SIGNUP } from "../../config/urls";
import { apiDelete,apiGet,apiPost,apiPut, setUserData } from "../../utils/utils";
import store from '../store'
import types from "../types";
const {dispatch}=store      
export function login (data={}){ 
  
   
   return new Promise ((resolve,reject)=>{
       apiPost(LOGIN,data).then(res=>{
        //    setUserData(res.data)
        // .then(suc=>{
        //        dispatch({
        //            type:types.LOGIN,
        //            paylaod:res.data
        //        })
        //    })
           resolve(res);
       }).catch(error=>{
           reject(error);
       })
   })
}
export const onLogout=()=>{
   
    dispatch({
        type:types.ONLOGOUT,
        payload:{}
    })
}
export function signup (data={}){ 
   
    return apiPost(SIGNUP,data);
}
export function otpVerify (data={}){ 
  
   
    return new Promise ((resolve,reject)=>{
        apiPost(OTPVERIFY,data).then(res=>{
            console.log("api response data",res.data);
            setUserData(res.data)
              .then(suc=>{
                dispatch({
                    type:types.ONOTPVERIFY,
                    payload:res.data
                })
            })
            console.log("resDataaaaa",res.data);
            resolve(res);
        }).catch(error=>{
            reject(error);
        })
    })
 }

