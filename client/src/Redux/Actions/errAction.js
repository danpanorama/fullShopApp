import {ERROR,PRODUCT_FAIL,MSG ,GOOD_MESSAGE, CLEAR} from '../constants/errConstant'


export const messageAction = (data) => async (dispatch)=>{
    try{

       
       function clearmessage(){
            dispatch({type:CLEAR, data:data});
    
         }

 clearTimeout(clearmessage);

        dispatch({type:CLEAR, data:data});
        dispatch({type:MSG, data:data});

        setTimeout(clearmessage,3000);

    

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


export const clearErrState = (data) => async (dispatch)=>{
    try{


        dispatch({type:CLEAR, data:data});
     

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}

export const errorAction = (data) => async (dispatch)=>{
    try{


        dispatch({type:ERROR, data:data});
     

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}
export const goodMessage = (data) => async (dispatch)=>{
    try{


        dispatch({type:GOOD_MESSAGE, data:data});
     

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

        

        dispatch({type:PRODUCT_FAIL,data:data})

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}