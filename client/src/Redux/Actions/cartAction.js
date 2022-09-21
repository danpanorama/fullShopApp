import {ADD_SHIPPING, CLEAR_CART,ADD_PAYMENT, ADD_PRODUCT} from '../constants/cartConstante'
import {ERROR,PRODUCT_FAIL} from '../constants/errConstant'
import {SET_PRODUCTS} from '../constants/productsConstant'

import axiosConfig from "../../config/AxiosConfig";



export const addItem = (data) => async (dispatch)=>{
    try{
        // dispatch({type:REQUEST_DATA})
        // dispatch({type:SET_PRODUCT_LIST,data:data})
      console.log(data)

dispatch({type:ADD_PRODUCT,data:data.data,amount:data.amount})

    }catch(e){
        dispatch({
            type:PRODUCT_FAIL,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const clearCart = (data) => async (dispatch)=>{
    try{
        dispatch({type:CLEAR_CART});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const addShipping = (data) => async (dispatch)=>{
    try{
        dispatch({type:ADD_SHIPPING,data:data});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const addPaymethod = (data) => async (dispatch)=>{


    try{

        dispatch({type:ADD_PAYMENT,data:data});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


export const clear = (data) => async (dispatch)=>{


    try{

        dispatch({type:CLEAR_CART});

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}