import {LOGIN,LOGOUT,STILL_CONNECT} from '../constants/adminContants'
import {MSG, PRODUCT_FAIL} from '../constants/errConstant'
import {ERROR} from '../constants/errConstant'
import axiosConfig from "../../config/AxiosConfig";


export const adminLogin = (data) => async (dispatch)=>{

    try{
        await
        axiosConfig
        .post("/store/login", 
       data
        )
        .then((res) => {
          if(res.data.err){
            dispatch({type:MSG,data:res.data.err})
      
          }else{
           if(res.data){
      
          

            dispatch({type:LOGIN,data:res.data})

            
           }

      
          }
        })
        .catch((err) => {
          dispatch({type:MSG,data:"somthing wrong"})
        });
        
        

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const adminloguot = (data) => async (dispatch)=>{
    try{
        dispatch({type:LOGOUT});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const stillConnected = (data) => async (dispatch)=>{
    try{
        dispatch({type:STILL_CONNECT});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

