import {
  ERROR,
  PRODUCT_FAIL,
  GOOD_MESSAGE,
  MSG
} from '../constants/errConstant'
import {
  SET_PRODUCTS,
  SET_STORE_PRODUCTS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_UPDATE_PRODUCT,
  CLEARUPDATE
} from '../constants/productsConstant'

import axiosConfig from "../../config/AxiosConfig";


export const getStoreProductsAction = (data) => async (dispatch) => {
  try {
    // dispatch({type:REQUEST_DATA})
    // dispatch({type:SET_PRODUCT_LIST,data:data})
    await axiosConfig
      .get("/product/items/getall")
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: ERROR,
            data: "something wrong"
          })

        } else {
          dispatch({
            type: SET_STORE_PRODUCTS,
            data: res.data
          });


        }
      })
      .catch((err) => {

        dispatch({
          type: ERROR,
          data: "something wrong"
        })

      });



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}






export const addProduct = (data) => async (dispatch) => {
  try {
    await axiosConfig
      .post("/product/items/add",data)
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data:{type:'bad',msg:"somthig went wrong"}
          })

        } else {
          dispatch({
            type: ADD_PRODUCT,
            data: res.data
          });


        }
      })
      .catch((err) => {

        dispatch({
          type: ERROR,
          data: "something wrong"
        })

      });



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}

export const cleareUpdateStae = (data) => async (dispatch)=>{
  try{  dispatch({
    type: CLEARUPDATE,
    data: data
  });

  }catch(e){

  }
}


export const removeProduct = (data) => async (dispatch) => {
  try {
    await axiosConfig
      .post("/product/items/del",data)
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: MSG,
            data:{type:'bad',msg:"somthig went wrong"}
          })

        } else {
          dispatch({
            type: REMOVE_PRODUCT,
            data: data
          });


        }
      })
      .catch((err) => {

        dispatch({
          type: MSG,
          data: {type:'bad',msg:"somthig went wrong"}
        })

      });



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}


export const updateProduct = (data) => async (dispatch) => {
  try {
    await
      axiosConfig
      .post("product/items/update", 
      data
      )
      .then((res) => {
        if(res.data.err){
        return   dispatch({
          type: MSG,
          data: {type:'bad',msg:"somthig went wrong update"}
        })

        }else{
       console.log(res.data)
       dispatch({type:SET_UPDATE_PRODUCT,data:res.data.data});
        

        }
      })
      .catch((err) => {
        dispatch({
          type: MSG,
          data: {type:'bad',msg:"somthig went wron g update"}
        })
      });



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}





export const setProductToUpdate = (data) => async (dispatch) => {
  try {

    console.log(data)
    dispatch({type:SET_UPDATE_PRODUCT,data:data});



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}