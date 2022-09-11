import '../../../css/App.css';
import '../../../css/cart.css';
import Shippingcomp from './Shippingcomp';
import {useFormik} from "formik"
import { Navigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../../../store/Actions";
import { useState } from 'react';
import { useLocation } from "react-router-dom";

function Shipping(props) {
  const dispatch = useDispatch(); 
  const [moveToPay,setMoveToPay] = useState(false)
  let location = useLocation();
  const item =  useSelector((state)=>state.item);
  let data =item.shipping
 
  const shipping = useFormik({
    initialValues:{
      country:data.country|| "", 
      street:data.steer|| "",
      state:data.state||"",
      address:data.address||"",
      address2:data.address2||"",
      zipcode:data.zipcode||"",
      phon:data.phon||"",
      total:location.state,
      status:'notpaid'
   
    
  },onSubmit:async values  => {
    try{
      console.log('here')
      if(values.address=="" || values.country=="" || values.state =="" || values.zipcode ==""){
        dispatch({type:actionTypes.BAD_MESSAGE,data:"must fill the information below"});

      }else{
        dispatch({type:actionTypes.ADD_SHIPPING,data:values});

        setMoveToPay(true)

      }
      
    }catch(e){
      console.log(e)
      dispatch({type:actionTypes.BAD_MESSAGE,data:e.message});

    }
  }});

  if(moveToPay){
    return <Navigate to="/paypage"/>
  }



  return (
    <div className="   ">
       <Shippingcomp shipping={shipping} />

 




   
 
    </div>
  );
}

export default Shipping;
