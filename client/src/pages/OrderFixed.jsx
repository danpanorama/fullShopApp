import '../css/App.css';
import '../css/placeorder.css';
import {useDispatch,useSelector} from "react-redux";
import CartList from '../components/cart/CartList';
import CostumerInfoFix from '../components/fix/CostumerInfoFix';
import PayboxFix from '../components/fix/PayboxFix';
import CartListFix from '../components/fix/CartListFix';
import axiosConfig from "../config/AxiosConfig"
import * as actionTypes from "../store/Actions";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import {getOrderById, payOrderAction} from '../Redux/Actions/ordersActions'

function OrderFix(props) {
const user =  useSelector((state)=>state.users);
const order =  useSelector((state)=>state.orders);



const dispatch = useDispatch();
let location = useLocation();

useEffect(()=>{
getOrder()
},[])

async function getOrder(){
    try{

    dispatch(getOrderById(location.state.data))


    }catch(e){

    }
}




async function payOrder(e){
  
  try{

     dispatch(payOrderAction(location.state.data));


  }catch(e){

  }
} 

  return ( 
    <div className="   ">
       <CostumerInfoFix all={order.AllOrdersItems}  user={user} item={order} />

 <h1>order</h1>
 <div className="flexrow flextop">
  <CartListFix all={order} />

{order.AllOrdersItems.length > 0? 
<div className="w100">
{ order.AllOrdersItems[0].ispaid  == 'no'?
  <PayboxFix all={order} totalPrice={order.AllOrdersItems.length > 0 ?order.AllOrdersItems[0].totalprice:0}  class={"buybtn3 flexcenter "} btntext={'pay now'} buyItem={payOrder} />

:
<PayboxFix all={order} totalPrice={order.AllOrdersItems.length > 0 ?order.AllOrdersItems[0].totalprice:0}    btntext={'product paid success'} />

}
</div>
  : ""}
  
 </div>
 




   
 
    </div>
  );
}

export default OrderFix;
