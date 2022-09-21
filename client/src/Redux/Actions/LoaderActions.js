import {START_LOAD,STOP_LOAD ,ERROR} from '../constants/loaderConstant.js'

export const activeLoaderReducer = (data) => async (dispatch)=>{
    try{


        dispatch({type:START_LOAD})
     

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}
export const stopeLoader = (data) => async (dispatch)=>{
    try{

        

        dispatch({type:STOP_LOAD,data:data})

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}