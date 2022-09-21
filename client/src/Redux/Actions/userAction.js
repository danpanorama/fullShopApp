import {LOGIN,LOGOUT,STILL_CONNECT} from '../constants/userContants'
import {PRODUCT_FAIL} from '../constants/errConstant'
import {ERROR} from '../constants/errConstant'


export const userLogin = (data) => async (dispatch)=>{

    try{
        
        dispatch({type:LOGIN,data:data})

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const userloguot = (data) => async (dispatch)=>{
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

