import {  combineReducers } from "redux";
import casinoReducer from "../reducers/casinoReducer";
import userReducer from "../reducers/users";
import itemReducer from "../reducers/itemReducer";
import storeReducer from '../reducers/storeReducer'







const rootReducer = combineReducers({
    casino: casinoReducer,
    user:userReducer,
    item:itemReducer,
    store:storeReducer
   
  });


  export default rootReducer;