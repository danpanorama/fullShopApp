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
            
            let shipping = JSON.parse(res.data.data[0].shipping);
            console.log(res.data.data[0]);
            let obj={
              ispaid:res.data.data[0].ispaid,
              isdeliverd:res.data.data[0].isdeliverd,
              price:res.data.data[0].price
            }
            setpaymeny(obj)
            settotal(shipping.total)
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




async function payOrder(e){
  console.log(location.state.data)
  try{

      await
      axiosConfig
      .post("/users/pay", 
      {id:location.state.data}
      )
      .then((res) => {
        if(res.data.err){
          dispatch({type:actionTypes.BAD_MESSAGE,data:"somthing wrong"})
    
        }else{
         console.log(res.data)
         if(res.data){
          res.data.data.products = JSON.parse(res.data.data.products);
          res.data.data.shipping = JSON.parse(res.data.data.shipping);

         console.log(res.data)

         }
       
          // setList(re);
        

    
        }
      })
      .catch((err) => {
        dispatch({type:actionTypes.BAD_MESSAGE,data:"somthing wrong"})
      });


  }catch(e){

  }
}

  return ( 
    <div className="   ">
       <CostumerInfo pyment={payment} user={user} item={item} />

 <h1>placeordare</h1>
 <div className="flexrow flextop">
  <CartList item={list} />
  <Paybox  class={"buybtn3 flexcenter "} btntext={'pay now'} buyItem={payOrder} total={total}/>
  
 </div>





   
 
    </div>
  );
}

export default Order;
