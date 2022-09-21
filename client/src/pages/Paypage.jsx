import '../css/App.css';
import '../css/cart.css';
import { NavLink,Navigate } from "react-router-dom";
import Typepay from '../components/order/Typepay';
import {useDispatch,useSelector} from "react-redux";
import { addPaymethod } from '../Redux/Actions/cartAction';
import { useState } from 'react';

function Paypage(props) {
  const dispatch = useDispatch()
  const [moveOn,setMoveon]= useState(false)
  function paymethod(e){
    dispatch(addPaymethod(e.target.id));
    setMoveon(true)

  }

  if(moveOn){
    return <Navigate to='/placeorder'/>
  }

  return (
    <div className=" flexcenter ">
       


     <div className="box">
     <NavLink to="/placeorder"  >orderlist </NavLink>
     </div>
     <Typepay paymethod={paymethod}/>



   
 
    </div>
  );
}

export default Paypage;
