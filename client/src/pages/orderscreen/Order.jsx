import '../../css/App.css';
import '../../css/placeorder.css';
import CostumerInfo from '../../components/order/CostumerInfo';
import {useDispatch,useSelector} from "react-redux";
import CartList from '../../components/cart/CartList';
import Paybox from '../../components/order/Paybox';
import axiosConfig from "../../config/AxiosConfig"
import * as actionTypes from "../../store/Actions";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';

function Order(props) {
  const user =  useSelector((state)=>state.user);
const item =  useSelector((state)=>state.item);
const [list,setList ] = useState([])
const dispatch = useDispatch();
let location = useLocation();
console.log(location.state.data)

async function buyItem(){

 
}
useEffect(()=>{
getOrder()
},[])

async function getOrder(){
    try{

        await
        axiosConfig
        .get("/users/getorderbyid", 
       {params: {id:location.state.data}}
        )
        .then((res) => {
          if(res.data.err){
            dispatch({type:actionTypes.BAD_MESSAGE,data:"somthing wrong"})
      
      
          }else{
            console.log(res.data.data[0].products)
           if(res.data.data[0].products){
            let products = JSON.parse(res.data.data[0].products)
           
            setList(products);
           }

      
          }
        })
        .catch((err) => {
          dispatch({type:actionTypes.BAD_MESSAGE,data:"somthing wrong"})
        });


    }catch(e){

    }
}
console.log(list)

  return (
    <div className="   ">
       <CostumerInfo user={user} item={item} />

 <h1>placeordare</h1>
 <div className="flexrow flextop">
  <CartList item={list} />
  <Paybox class={"buybtn3 flexcenter "} btntext={'pay now'} buyItem={buyItem} total={item.shipping.total}/>
  
 </div>





   
 
    </div>
  );
}

export default Order;
