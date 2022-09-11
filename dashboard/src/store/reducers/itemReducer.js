import * as actionTypes from "../Actions";

const initialState = {
  item: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.LOGOUT_ITEMS:
      const itemsRed = {
        ...state,
      };
      itemsRed.item = []
      return itemsRed;





    case actionTypes.ADD_PRODUCT:
      const product = {
        ...state,
      };

      if (action.data) {


        product.item = [...product.item, action.data];

      }

      return product;



    case actionTypes.REMOVE_PRODUCT:
      const removeproduct = {
        ...state,
      };
      if (action.data) {
console.log('gg')

        let arr = removeproduct.item.filter((ele) => {
          return ele.id != action.data.id;
        });
        removeproduct.item = arr;

      }

      return removeproduct;









      // case actionTypes.DELETE_ALL:
      //   const removeAllProduct = {
      //     ...state,
      //   };
      //   if (action.data) {

      //     let arr = removeAllProduct.cardItems.filter((ele) => {
      //       return ele.id != action.data;
      //     });
      //     removeAllProduct.cardItems = arr;


      //     let safeDeploy = JSON.stringify(removeAllProduct.cardItems);
      //     localStorage.setItem("card", safeDeploy);
      //   }

      //   return removeAllProduct;







    case actionTypes.SET_STORE_PRODUCTS:
      const setPRoductsStete = {
        ...state,
      };
      setPRoductsStete.item = action.data.data

      return setPRoductsStete;



    default:
      break;
  }
  return state;
};

export default reducer;