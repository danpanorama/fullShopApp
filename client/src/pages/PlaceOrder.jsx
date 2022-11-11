import '../css/App.css';
import '../css/placeorder.css';
import CostumerInfo from '../components/order/CostumerInfo';
import {useDispatch,useSelector} from "react-redux";
import CartList from '../components/cart/CartList';
import Paybox from '../components/order/Paybox';
import axiosConfig from "../config/AxiosConfig"
import * as actionTypes from "../store/Actions";
import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { clear } from '../Redux/Actions/cartAction';

function PlaceOrder(props) {
  const user =  useSelector((state)=>state.users); 
const item =  useSelector((state)=>state.cart);
const orders =  useSelector((state)=>state.orders);

const dispatch = useDispatch();
const [isbut,setisbuy] = useState(false)
const [idid,setidid] = useState(0)

let location = useLocation();
console.log(item)

async function buyItem(e){
  let cardItems = item.cardItems;
  let shipping = orders.shipping;
  let paymethod = orders.payment
  

  

  await
  axiosConfig 
  .post("/users/neworder", 
{  item:cardItems,shipping:shipping,user:user,endPrice:item.total,paymethod:paymethod}
  )
  .then((res) => {
    if(res.data.err){
      dispatch({type:actionTypes.BAD_MESSAGE,data:"somthing wrong"})
      


    }else{
     console.log(res.data)
     setisbuy(true)
     setidid(res.data.id)
     dispatch(clear())

      
 
    }
  })
  .catch((err) => {
    dispatch({type:actionTypes.BAD_MESSAGE,data:"somthing wrong"})
  });
}

if(isbut){
  return <Navigate to={{pathname:"/order/"+idid }} state={{data:idid}} />
}

  return (
    <div className="   ">
       <CostumerInfo pyment={orders.payment} user={user} order={orders} />

 <h1>placeordare</h1>
 <div className="flexrow flextop">
  <CartList item={item.cardItems} />
  <Paybox class={"buybtn2 flexcenter "} btntext={'place order'} buyItem={buyItem} total={item.total}/>
  
 </div>





   
 
    </div>
  );
}

export default PlaceOrder;
