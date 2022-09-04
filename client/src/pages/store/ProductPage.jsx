import "../../css/App.css";
import "../../css/profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actionTypes from "../../store/Actions";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductPagecomp from "./ProductPagecomp";
import Commends from "../../components/store/Commends";
import {useFormik} from "formik"
import axiosConfig from "../../config/AxiosConfig"

function ProductPage(props) {
  const [isNeedToLog, setIsNeedToLOg] = useState(false);
  const [amountState, setAmount] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [errState, setErrState] = useState("");
  const [productState, SetProducte] = useState({});

  let location = useLocation();


  function increamNum(){
    setAmount(amountState+1);

  }

  useEffect(()=>{
    console.log(location.state.data)
    SetProducte(location.state.data)
  },[])



  async function removecommend(e){
    try{
      console.log(e)
      let data = JSON.parse(e.target.title)
  
      data.itemId = location.state.data.id;

     

       await

      axiosConfig
      .post("/product/removecommend", 
      data
      )
      .then((res) => {
        if(res.data.err){
        return setErrState(res.data.err);

        }else{
         
        
           console.log(res.data)
          
           SetProducte(res.data.item)
        }
      })
      .catch((err) => {
        setErrState(err.err);
      });
    }catch(e){
      console.log(e)
      setErrState("error while sending requast"+e);
    }

  }

  const addCommend = useFormik({
    initialValues:{
   
      text: ""
  },onSubmit:async values  => {
    try{

      values.name =  user.user.name;
      values.id =user.user.id;
      values.itemId = location.state.data.id;
       await

      axiosConfig
      .post("/product/addcommend", 
      values
      )
      .then((res) => {
        if(res.data.err){
        return setErrState(res.data.err);

        }else{
         
        
           console.log(res.data)
          
           SetProducte(res.data.item)
        }
      })
      .catch((err) => {
        setErrState(err.err);
      });
    }catch(e){
      console.log(e)
      setErrState("error while sending requast"+e);
    }
  }});
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
<div className="paddpage">
<ProductPagecomp amountState={amountState} product={location.state.data} decreamNum={decreamNum} increamNum={increamNum}  addToCard={addToCard} />
<Commends remove={removecommend}islog={user} id={user.user.id} addCommend={addCommend} product={productState} />
</div>
    );
}

export default  ProductPage;
