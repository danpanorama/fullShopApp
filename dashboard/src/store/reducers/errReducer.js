import * as actionTypes from "../Actions";

const initialState = {
  text: "",
  isActive:false,
  type:""

};

const reducer = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.GOOD_MESSAGE:
      const newState = {
        ...state,
      };
      newState.text = ""
      newState.text = action.data;
      newState.isActive = true
      newState.type = 'good'

      return newState;

      case actionTypes.BAD_MESSAGE:
        const errState = {
          ...state,
        };
        errState.text = ""
        errState.text = action.data;
        errState.isActive = true
        errState.type = 'bad'
        return errState;

        case actionTypes.RESET_MSG:
          const resete = {
            ...state,
          };
          resete.text = ""
          resete.isActive = false
          resete.type = ''
  
        
          return resete;


    default:
      break;
  }
  return state;
};

export default reducer;