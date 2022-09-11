import * as actionTypes from "../Actions";

const initialState = {
  item: [],
  itemLength: 0,
  cardItems: [],
  shipping:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  



    case actionTypes.LOGOUT_ITEMS:
      const itemsRed = {
        ...state,
      };
      itemsRed.cardItems = [];
      itemsRed.shipping = {}
      localStorage.setItem("card", undefined);
      return itemsRed;


      case actionTypes.ADD_SHIPPING:
        const addshipping = {
          ...state,
        };
        addshipping.shipping = action.data ;
        let json = JSON.stringify(action.data)


        localStorage.setItem("address", json);
        return addshipping;

      // case actionTypes.LOGOUT:
      //   const logout = {
      //     ...state
      //   };
      //   logout.cardItems = []
      //   logout.item = []

      //   localStorage.setItem('card',undefined)
      //   return itemsRed

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
            flag = true;
          }
        }
        if (!flag) {
          action.data.amount = action.amount;

          product.cardItems = [...product.cardItems, action.data];
        }
      }
      let safeReload = JSON.stringify(product.cardItems);
      localStorage.setItem("card", safeReload);

      return product;

    case actionTypes.REMOVE_PRODUCT:
      const removeproduct = {
        ...state,
      };
      if (action.data) {
        let flag = false;

        for (let i = 0; i < removeproduct.cardItems.length; i++) {
          if (removeproduct.cardItems[i].id == action.data.id) {
            if (removeproduct.cardItems[i].amount > 1) {
              console.log("here", removeproduct.cardItems[i].amount);
              removeproduct.cardItems[i].amount =
                removeproduct.cardItems[i].amount - 1;
            } else {
              console.log("true");
              flag = true;
            }
          }
        }

        if (flag) {
          let arr = removeproduct.cardItems.filter((ele) => {
            return ele.id != action.data.id;
          });
          removeproduct.cardItems = arr;
        }

        let safeDeploy = JSON.stringify(removeproduct.cardItems);
        localStorage.setItem("card", safeDeploy);
      }

      return removeproduct;









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
      const setStete = {
        ...state,
      };
      let data = localStorage.getItem('card');
      let address = localStorage.getItem('address');


      if (data == undefined || data == "undefined" ) {
        return setStete
      } else {

        let jsondata = JSON.parse(data);
        setStete.cardItems = jsondata;
      }


      if(address == undefined || address == "undefined"){
        return setStete
      }else{
        let dataaddress = JSON.parse(address);
        setStete.shipping = dataaddress
      }

      return setStete;



    default:
      break;
  }
  return state;
};

export default reducer;