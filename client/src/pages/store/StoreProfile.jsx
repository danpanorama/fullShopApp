import "../../css/App.css";
import "../../css/profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actionTypes from "../../store/Actions";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StoreProfileComp from "./StoreProfileComp";

function StoreProfile(props) {
  const [isNeedToLog, setIsNeedToLOg] = useState(false);
  const [amountState, setAmount] = useState(1);


  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  let location = useLocation();

  function increamNum(){
    setAmount(amountState+1);

  }
  function decreamNum(){
    if(amountState >0){
      setAmount(amountState -1 )

    }
  }
  function addToCard(e) {
   

    if (user.isLog) {

      dispatch({ type: actionTypes.ADD_PRODUCT, data: location.state.data,amount: amountState });
    } else {
      setIsNeedToLOg(true);
    }
  }
  if (isNeedToLog) {
    return <Navigate to={{ pathname: "/login" }} />;
  }

  return (
  <StoreProfileComp amountState={amountState} product={location.state.data} decreamNum={decreamNum} increamNum={increamNum}  addToCard={addToCard} />
  );
}

export default  StoreProfile;
