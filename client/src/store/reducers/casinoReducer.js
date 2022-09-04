import * as actionTypes from "../Actions";

const initialState = {
userData:{},
userCoins:[]
    };

const reducer = (state = initialState, action) => {

  switch (action.type) {
    
    case actionTypes.SETCASINO:
        const newState = {...state};
         newState.userData = action.data;
         console.log(action.data)
         let plan = action.data.mony
        
         let array = JSON.parse(plan);
         
         newState.userCoins = [...newState.userCoins,array ];

         console.log(newState.userCoins)

        return newState



          case actionTypes.DELET:
            const deletState = {...state}; 
            deletState.userData = {};
            deletState.userCoins = {};
            return deletState
        

    default:
      break;
  }
  return state;
};

export default reducer;
