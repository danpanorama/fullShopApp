import "../../css/App.css";
import "../../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import Storecomp from "./Storecomp";
import { useEffect, useState } from "react";
import axiosConfig from "../../config/AxiosConfig";
import * as actionTypes from "../../store/Actions";
import { Navigate } from "react-router-dom";

function Store() {
  const [errState, setErrState] = useState("");
  const [array, setArray] = useState([]);
  const [isNeedToLog, setIsNeedToLOg] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    getAllMyProducts();
  }, []);

  async function getAllMyProducts() {
    try {
      await axiosConfig
        .get("/product/items/getall")
        .then((res) => {
          if (res.data.err) {
            return setErrState(res.data.err);
          } else {
            setArray(res.data.data);

            setErrState("");
          }
        })
        .catch((err) => {
          setErrState(err.err);
        });
    } catch (e) {
      console.log(e);
      setErrState("error while sending requast" + e);
    }
  }

  // function addToCard(e){

  //   if(user.isLog){
  //       let data = JSON.stringify(e.target.title)

  //   dispatch({type:actionTypes.ADD_PRODUCT,data:data})
  //   }else{
  //     setIsNeedToLOg(true)
  //   }

  // }
  // if(isNeedToLog){
  //   return <Navigate to={{pathname:"/login"}} />
  // }

  return (
   
          <Storecomp array={array} />
   
  );
}

export default Store;
