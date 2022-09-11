import {  combineReducers } from "redux";
import adminReducer from "../reducers/admin";
import itemReducer from "../reducers/itemReducer";


import errReducer from '../reducers/errReducer'





const rootReducer = combineReducers({
  
    admin:adminReducer,
    item:itemReducer,
  
    err:errReducer
   
  });


  export default rootReducer;