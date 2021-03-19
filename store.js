import {createStore} from 'redux'
import counterReducer from './reducer'
export default store=createStore(counterReducer);