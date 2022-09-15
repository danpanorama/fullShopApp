import * as actionTypes from "../Actions";



const initialState = {
  isLog: false,
  admin: {},


};


const reducer = (state = initialState, action) => {



  switch (action.type) {


    case actionTypes.LOGIN_ADMIN:
      const newState = {
        ...state
      };
      let userinfostring = JSON.stringify(action.data.userInfo);
      localStorage.setItem('user', userinfostring)
      newState.user = action.data.userInfo;
      newState.isLog = true
      return newState


    case actionTypes.LOGOUT_ADMIN:
      const loguot = {
        ...state
      };
      loguot.isLog = false;

      localStorage.setItem('user', undefined)
      loguot.user = {};
      return loguot


    case actionTypes.STILL:
      const stateStill = {
        ...state
      };
      let user = localStorage.getItem('user');
      if (user != 'undefined') {

        let par = JSON.parse(user)


        if (par == undefined || par == 'undefined') {

          return stateStill
        } else {

          stateStill.user = par
          stateStill.isLog = true
        }
      } else {
        console.log('user is undefined')
      }


      return stateStill


    default:
      break;
  }
  return state;
};

export default reducer;