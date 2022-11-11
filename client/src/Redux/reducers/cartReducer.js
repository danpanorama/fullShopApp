import * as actionTypes from "../constants/cartConstante";

const initialState = {

  cardItems: [],
  total:0,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.CLEAR_CART:
      const clear_cart = {
        ...state,
      };
      clear_cart.cardItems = [];
      localStorage.setItem("card", undefined);
      return clear_cart;






    case actionTypes.ADD_PRODUCT:
      const product = {
        ...state,
      };
      let flag = false;
      if (action.data) {
        for (let i = 0; i < product.cardItems.length; i++) {
          if (product.cardItems[i].id == action.data.id) {
              product.cardItems[i].amount =
              product.cardItems[i].amount + action.amount;
              product.total = product.total + (action.data.price * action.amount);
            flag = true;
          }
        }
        if (!flag) {
          action.data.amount = action.amount;
          product.total = product.total + (action.data.price * action.amount);
          product.cardItems = [...product.cardItems, action.data];
        }
      }

      // storing data on local storage just for case the user reload the page 
      let safeReload = JSON.stringify(product.cardItems);
      localStorage.setItem("card", safeReload);

      return product;



    case actionTypes.REMOVE_PRODUCT:
      const remove_product = {
        ...state,
      };
      if (action.data) {
        let flag = false;

        for (let i = 0; i < remove_product.cardItems.length; i++) {
          if (remove_product.cardItems[i].id == action.data.id) {
            if (remove_product.cardItems[i].amount > 1) {
              console.log("here", remove_product.cardItems[i].amount);
              remove_product.cardItems[i].amount =
                remove_product.cardItems[i].amount - 1;
                remove_product.total = remove_product.total - remove_product.cardItems[i].price;

            } else {
              console.log("true");
              flag = true;
            }
          }
        }

        if (flag) {
          let arr = remove_product.cardItems.filter((ele) => {
            remove_product.total = remove_product.total - ele.price;

            return ele.id != action.data.id;
          });
          
          remove_product.cardItems = arr;
        }

        let safeDeploy = JSON.stringify(remove_product.cardItems);
        localStorage.setItem("card", safeDeploy);
      }

      return remove_product;









    case actionTypes.DELETE_ALL:
      const removeAllProduct = {
        ...state,
      };
      if (action.data) {

        let arr = removeAllProduct.cardItems.filter((ele) => {
          removeAllProduct.total =   (ele.price * ele.amount)- removeAllProduct.total;


          return ele.id != action.data;
        });
        removeAllProduct.cardItems = arr;
        let safeDeploy = JSON.stringify(removeAllProduct.cardItems);
        localStorage.setItem("card", safeDeploy);
      }

      return removeAllProduct;







    case actionTypes.SET:
      const setState = {
        ...state,
      };
      let data = localStorage.getItem('card');
  


      if (data == undefined || data == "undefined") {
        return setState
      } else {

        let jsondata = JSON.parse(data);
        setState.cardItems = jsondata;
      }



      return setState;


 case actionTypes.SET_TOTAL:
      const setTotal = {
        ...state,
      };
      setTotal.total = Number(action.data)



      return setTotal;

     


    default:
      break;
  }
  return state;


};

export default reducer;