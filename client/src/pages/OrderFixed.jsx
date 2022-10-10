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

    let r =  dispatch(getOrderById(location.state.data))
console.log(r)

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

  return ( 
    <div className="   ">
       <CostumerInfoFix all={order} pyment={order.payment} user={user} item={order} />

 <h1>order</h1>
 <div className="flexrow flextop">
  <CartListFix all={order} />

  {order.payment.ispaid == 'no'?
    <PayboxFix all={order}  class={"buybtn3 flexcenter "} btntext={'pay now'} buyItem={payOrder} />

  :
  <PayboxFix all={order}   btntext={'product paid success'} />

  }
  
 </div>
 




   
 
    </div>
  );
}

export default OrderFix;
