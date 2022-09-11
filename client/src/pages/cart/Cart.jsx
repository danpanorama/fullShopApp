import '../../css/App.css';
import '../../css/cart.css';
import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig"
import CartComp from './CartComp';
import Total from '../../components/cart/Total';
import { Navigate } from "react-router-dom";

function Cart(props) {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.user);
    const card = useSelector((state) => state.item);
    const[ navPopUp,setNavPopUp] = useState(false)
    const[ neddToLogState,setNeedToLog] = useState(false)
    const [amountState, setAmount] = useState(1);


  



    function increamNum(e){

        let data = JSON.parse(e.target.title)
       
    
        dispatch({ type: actionTypes.ADD_PRODUCT, data:data ,amount: 1 });
    
    
      }
    
      function deleteall(e){
    
    
        dispatch({ type: actionTypes.DELETE_ALL, data:e.target.id  });
    
    
      }
    
      function decreamNum(e){
    
         
          let data = JSON.parse(e.target.title)
    
          dispatch({ type: actionTypes.REMOVE_PRODUCT, data:data ,amount: 1 });
      
    
       
      }

      function buyproduct(){
        if(user.isLog ){
          return <Navigate to="/shipping"/>

        }else{
            setNeedToLog(true)
        }
      }


if(neddToLogState){
    return <Navigate state={'way to buy'} to="/login"/>
}


  return (
    <div className="   ">
       
<Total cart={card.cardItems} />
   
          <CartComp buyproduct={buyproduct}  deleteall={deleteall} setAmount={setAmount} decreamNum={decreamNum} increamNum={increamNum} isActive={navPopUp}  cart={card.cardItems}/>
   
   
 




   
 
    </div>
  );
}

export default Cart;
