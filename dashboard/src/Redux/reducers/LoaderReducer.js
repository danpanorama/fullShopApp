import * as actionTypes from "../constants/loaderConstant.js";

const initialState = {
Loader:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  



    case actionTypes.START_LOAD:
      const loader = {
        ...state,
      };
      console.log('l')
      loader.Loader = true
   
      return loader;


      case actionTypes.STOP_LOAD:
        const stopLoad = {
          ...state,
        };
        stopLoad.Loader = false
     
        return stopLoad;











    default:
      break;
  }
  return state;
};

export default reducer;