import * as actionTypes from "../constants/cartConstante";

const initialState = {

  cardItems: [],
  shipping: {},
  payment:{},
  total:0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.CLEAR_CART:
      const clear_cart = {
        ...state,
      };
      clear_cart.cardItems = [];
      clear_cart.shipping = {}
      localStorage.setItem("card", undefined);
      localStorage.setItem('address', undefined);
      return clear_cart;


    case actionTypes.ADD_SHIPPING:
      const add_shipping = {
        ...state,
      };
      add_shipping.shipping = action.data;
      let json = JSON.stringify(action.data)
      localStorage.setItem("address", json);
      return add_shipping;



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
      let address = localStorage.getItem('address');


      if (data == undefined || data == "undefined") {
        return setState
      } else {

        let jsondata = JSON.parse(data);
        setState.cardItems = jsondata;
      }


      if (address == undefined || address == "undefined") {
        return setState
      } else {
        let dataaddress = JSON.parse(address);
        setState.shipping = dataaddress
      }

      return setState;


      case actionTypes.ADD_PAYMENT:
        const payState = {
          ...state,
        };
        let yourDate = new Date()
        let date = yourDate.toISOString().split('T')[0];

        

        payState.payment = {
          "date":date,
          "type":action.data,
        'ispaid':"no"}
  
        return payState;
 


    default:
      break;
  }
  return state;


};

export default reducer;