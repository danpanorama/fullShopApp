import * as actionTypes from "../../store/Actions";

export const Errmsg = (msg,type) => {
  return function b(dispatch,getState) {
    if(type == 'bad'){
         dispatch({type:actionTypes.BAD_MESSAGE,data:msg})

    }else{
         dispatch({type:actionTypes.GOOD_MESSAGE,data:msg})

    }
    setTimeout(() => {
        dispatch({type:actionTypes.RESET_MSG,}) 
      }, 4000);
      return
}};


