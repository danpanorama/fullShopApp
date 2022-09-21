import {
  ERROR,
  PRODUCT_FAIL,
  GOOD_MESSAGE
} from '../constants/errConstant'
import {
  ADD_COMMENT,
  SINGLE_PRODUCT,
  SET_PRODUCTS,
  REMOVE_COMMENT
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

          console.log('hayther sexy ass')
          dispatch({
            type: GOOD_MESSAGE,
            data: "commend was add"
          })
          dispatch({
            type: SINGLE_PRODUCT,
            data: res.data.item
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
      .post("/product/removecommend",
        data
      )
      .then((res) => {
        if (res.data.err) {
          return dispatch({
            type: ERROR,
            data: "you remove commend"
          })


        } else {



          dispatch({
            type: SINGLE_PRODUCT,
            data: res.data.item
          })

          dispatch({
            type: GOOD_MESSAGE,
            data: "you remove commend"
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
            data: res.data.data
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