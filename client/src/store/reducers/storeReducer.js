import * as actionTypes from "../Actions";

const initialState = {
  item: [],
  itemLength: 0,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {


    case actionTypes.ADD_ITEM:
      const newState = {
        ...state,
      };

      newState.item = [...newState.item, action.data.data];
      newState.itemLength = newState.item.length;
      return newState;



    case actionTypes.DEL_ITEM:
      const deleteState = {
        ...state,
      };
      let arr = deleteState.item.filter((ele) => {
        return ele.id != action.data;
      });
      deleteState.item = arr;
      deleteState.itemLength = deleteState.item.length;
      return deleteState;



    case actionTypes.LOGOUT_ITEMS:
      const itemsRed = {
        ...state,
      };
      itemsRed.cardItems = [];
      localStorage.setItem("card", undefined);
      return itemsRed;

      // case actionTypes.LOGOUT:
      //   const logout = {
      //     ...state
      //   };
      //   logout.cardItems = []
      //   logout.item = []

      //   localStorage.setItem('card',undefined)
      //   return itemsRed

      


      case actionTypes.SET_STORE_PRODUCTS:
        const setPRoductsStete = {
          ...state,
        };
        setPRoductsStete.item =  action.data.data
  
        return setPRoductsStete;


        case actionTypes.UPDATE_LIKE:
          const update = {
            ...state,
          };
          console.log(action.data);
          for(let i = 0; i < update.item.length; i++){
            if(update.item[i].id == action.data.id){
              update.item[i].likes = action.data.review
            }
          }

         
    
          return update;
  







    default:
      break;
  }
  return state;
};

export default reducer;