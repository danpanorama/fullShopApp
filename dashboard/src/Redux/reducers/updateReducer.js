import * as actionTypes from "../constants/productsConstant";

const initialState = {
  updateItem: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {



    case actionTypes.SET_UPDATE_PRODUCT:
      const setPRoductsStete = {
        ...state,
      };
       console.log(action.data)
      setPRoductsStete.updateItem = action.data

      return setPRoductsStete;

      case actionTypes.CLEARUPDATE:
        const clearState = {
          ...state,
        };
        
         clearState.updateItem = {}
  
        return clearState;

    default:
      break;
  }
  return state;
};

export default reducer;