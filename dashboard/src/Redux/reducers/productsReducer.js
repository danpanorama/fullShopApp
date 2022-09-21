import * as actionTypes from "../constants/productsConstant";

const initialState = {
  items: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {



    case actionTypes.ADD_PRODUCT:
      const product = {
        ...state,
      };

      if (action.data) {
        product.items = [...product.items, action.data];
      }

      return product;



    case actionTypes.REMOVE_PRODUCT:
      const removeproduct = {
        ...state,
      };
      if (action.data) {

        let arr = removeproduct.items.filter((ele) => {
          return ele.id != action.data.id;
        });
        removeproduct.items = arr;

      }

      return removeproduct;




      case actionTypes.UPDATE_PRODUCT:
        const update = {
          ...state,
        };
        update.items.map((e,i)=>{
          if(e.id == action.data.id){
            update.items[i] = action.data
          }
        })
  
        return update;
  


    case actionTypes.SET_STORE_PRODUCTS:
      const setPRoductsStete = {
        ...state,
      };
       
      setPRoductsStete.items = action.data.data

      return setPRoductsStete;



    default:
      break;
  }
  return state;
};

export default reducer;