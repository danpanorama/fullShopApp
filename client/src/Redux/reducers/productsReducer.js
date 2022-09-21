import * as actionTypes from "../constants/productsConstant";

const initialState = {
  items: [],
  singleItem:{},
 

};

const products = (state = initialState, action) => {
  switch (action.type) {




    case actionTypes.SET_PRODUCTS:
      const set = {
        ...state,
      };
      set.items = action.data.data

      return set;


      case actionTypes.SINGLE_PRODUCT:
      const single = {
        ...state,
      };
      
     
      single.singleItem = action.data

      return single;


    //   case actionTypes.REMOVE_COMMENT:
    //     const remove_commend = {
    //       ...state,
    //     };
    //     remove_commend.singleItem = action.data
    //     return remove_commend;




    //  case actionTypes.ADD_COMMENT:
    //     const add_commend = {
    //       ...state,
    //     };
    //    let json = JSON.parse(add_commend.singleItem.commends);
    //     json = [...json, action.data];
    //     let string = JSON.stringify(json);
    //     add_commend.singleItem.commends = string;
       
  
    //     return add_commend;

      
    

  







    default:
      return state

  }
}

export default products