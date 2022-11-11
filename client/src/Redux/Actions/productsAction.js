import {
  ERROR,
  PRODUCT_FAIL,
  GOOD_MESSAGE
} from '../constants/errConstant'
import {
  ADD_COMMENT,
  SINGLE_PRODUCT,
  SET_PRODUCTS,
  REMOVE_COMMENT,
  CLEAR_SINGLE_PRODUCT
} from '../constants/productsConstant'

import axiosConfig from "../../config/AxiosConfig";


export const getStoreProducts = (data) => async (dispatch) => {
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
            type: SET_PRODUCTS,
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



export const addComment = (data) => async (dispatch) => {
  try {
    await

    axiosConfig
      .post("/product/addcommend",
        data
      )
      .then((res) => {
        if (res.data.err) {
          return

        } else {

          // dispatch({type:ADD_COMMENT,data:data})


          dispatch({
            type: GOOD_MESSAGE,
            data: "commend was add"
          })
          dispatch({
            type: ADD_COMMENT,
            data: res.data.allcommends
          })


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







export const removeComment = (data) => async (dispatch) => {
  try {

    await

    axiosConfig
      .post("/product/removecommend", {
        id: data
      })
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: ERROR,
            data: "you remove commend"
          })


        } else {



          dispatch({
            type: REMOVE_COMMENT,
            data: data
          })

          dispatch({
            type: GOOD_MESSAGE,
            data: "you remover commend"
          })

        }
      })
      .catch((err) => {

        dispatch({
          type: ERROR,
          data: err.err
        })

      });


  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}

export const clearState = (data) => async (dispatch) => {
  try {

    dispatch({
      type: CLEAR_SINGLE_PRODUCT
    })

  } catch (e) {
    dispatch({
      type: ERROR,
      data: e.message
    })
  }
}



export const singleProductPage = (data) => async (dispatch) => {
  try {





    await

    axiosConfig
      .post("/product/getproductbyid",
        data
      )
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: ERROR,
            data: "somthing happend  "
          })

        } else {


          dispatch({
            type: SINGLE_PRODUCT,
            data: res.data.data.products,
            comments: res.data.data.comments
          })


        }
      })
      .catch((err) => {
        console.log('err')
        dispatch({
          type: ERROR,
          data: err.err
        })

      });



  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}