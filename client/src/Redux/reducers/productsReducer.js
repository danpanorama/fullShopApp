import * as actionTypes from "../constants/productsConstant";

const initialState = {
  items: [],
  singleItem:{},
  comments:[]
 

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
      single.comments= action.comments

      return single;

      case actionTypes.ADD_COMMENT:
        const addcomment = {
          ...state,
        };
        
        addcomment.comments= action.data[0]
  
        return addcomment;



        case actionTypes.REMOVE_COMMENT:
          const removeComment = {
            ...state,
          };
         removeComment.comments =  removeComment.comments.filter(e => e.id != action.data );
          

          return removeComment;


      
    

  
          case actionTypes.CLEAR_SINGLE_PRODUCT:
            const clearSingle = {
              ...state,
            };
            clearSingle.comments = [];
            clearSingle.singleItem= {};
            
  
            return clearSingle;






    default:
      return state

  }
}

export default products