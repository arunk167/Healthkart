import { combineReducers } from "redux";
import auth from "./authentication";
import cart from "./cart"

export default combineReducers({
    auth,
    cart,
    
})