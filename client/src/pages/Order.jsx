import '../css/App.css';
import '../css/placeorder.css';
import CostumerInfo from '../components/order/CostumerInfo';
import {useDispatch,useSelector} from "react-redux";
import CartList from '../components/cart/CartList';
import Paybox from '../components/order/Paybox';
import axiosConfig from "../config/AxiosConfig"
import * as actionTypes from "../store/Actions";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import {getOrderById, payOrderAction} from '../Redux/Actions/ordersActions'

function Order(props) {
const user =  useSelector((state)=>state.users);
const item =  useSelector((state)=>state.cart);
const order =  useSelector((state)=>state.orders);

const [list,setList ] = useState([])
const [total,settotal ] = useState(0)
const [payment,setpaymeny ] = useState({})

const dispatch = useDispatch();
let location = useLocation();

async function buyItem(){

 
}
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
  console.log(location.state.data)
  try{

     dispatch(payOrderAction(location.state.data));


  }catch(e){

  }
}
console.log(order.payment.ispaid)
  return ( 
    <div className="   ">
       <CostumerInfo pyment={order.payment} user={user} item={order} />

 <h1>order</h1>
 <div className="flexrow flextop">
  <CartList item={order.cardItems} />

  {order.payment.ispaid == 'no'?
    <Paybox  class={"buybtn3 flexcenter "} btntext={'pay now'} buyItem={payOrder} total={order.shipping.total}/>

  :
  <Paybox   btntext={'product paid success'}  total={order.shipping.total}/>

  }
  
 </div>
 




   
 
    </div>
  );
}

export default Order;
