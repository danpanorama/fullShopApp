import * as actionTypes from "../constants/cartConstante";

const initialState = {

  cardItems: [],
  shipping: {},
  payment:{},
  total:0,
  AllOrdersItems:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {





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

        case actionTypes.SET_ORDER_READY:
        const orderready = {
          ...state,
        };
       orderready.AllOrdersItems = action.data
  
        return orderready;
 
        case actionTypes.SET_SINGLE_ITEM:
            const single = {
              ...state,
            };
            console.log(action.data);
            single.cardItems = action.data.products;
            single.shipping = action.data.shipping
            let obj = {
                'ispaid':action.data.ispaid,
                'isdeliverd':action.data.isdeliverd,
                'date':action.data.date,
                'datepaid':action.data.datepaid,
                'priceaftertax':action.data.price,
                'pricebefortax':action.data.shipping.total
            }
            single.payment = obj
            
         single.total = action.data.price
       
      
            return single;


    default:
      break;
  }
  return state;


};

export default reducer;