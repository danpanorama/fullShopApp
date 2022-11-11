import {SET_SINGLE_ITEM,SET_ORDER_READY} from '../constants/cartConstante'
import {ERROR,PRODUCT_FAIL} from '../constants/errConstant'
import {SET_PRODUCTS} from '../constants/productsConstant'
import axiosConfig from "../../config/AxiosConfig";



export const getOrderById = (data) => async (dispatch)=>{


    try{

        await
        axiosConfig
        .get("/users/getorderbyid", 
       {params: {id:data}}
        )
        .then((res) => {

          if(res.data.err){
            dispatch({type:ERROR,data:"somthing wrong"})
      
          }else{
           if(res.data.data){
       
            // let products = JSON.parse(res.data.data[0].products);
            // let shipping = JSON.parse(res.data.data[0].shipping);
            // let obj={
            //   ispaid:res.data.data[0].ispaid,
            //   isdeliverd:res.data.data[0].isdeliverd,
            //   price:res.data.data[0].price
            // }
            // res.data.data[0].products = products;
            // res.data.data[0].shipping = shipping;
          
            

            dispatch({type:SET_ORDER_READY,data:res.data.data})

            
           }

      
          }
        })
        .catch((err) => {
          dispatch({type:ERROR,data:"somthing wrong"})
        });

    }catch(e){
        dispatch({
            type:ERROR,
            payload:e.response && e.response.data.message ?e.response.data.message 
            : e.message,
        })
    }
}


export const payOrderAction = (data) => async (dispatch) => {
  try {
    await
      axiosConfig
      .post("/users/pay", 
      {id:data}
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:ERROR,data:"somthing wrong"})
    
        }else{
         
         if(res.data){
       
          dispatch({type:SET_ORDER_READY,data:res.data.data})
         }

        //  dispatch({type:SET_SINGLE_ITEM,data:res.data.data})

       
          // setList(re);
        

    
        }
      })
      .catch((err) => {
        dispatch({type:ERROR,data:"somthing wrong"})
      });


  } catch (e) {
    dispatch({
      type: PRODUCT_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}