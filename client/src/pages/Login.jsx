import React, { useState } from "react";
import '../css/App.css';
import Loginform from '../components/login/Loginform';
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import { Navigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "../store/Actions";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { userLogin } from "../Redux/Actions/userAction";

function Login() {
  
  const dispatch = useDispatch();
  const [isLog, setIsLog] = useState(false);
  const [errState, setErrState] = useState("");
  let location = useLocation();

  const login = useFormik({
    initialValues:{
      name: "", 
      password: "",
      remember: false,
  },onSubmit:async values  => {
    try{
       await
      axiosConfig
      .post("/register/login", 
      values
      )
      .then((res) => {
        if(res.data.err){
        return setErrState(res.data.err);

        }else{
          localStorage.setItem('rem',res.data.remember)
          if(res.data.remember){
            localStorage.setItem('user',JSON.stringify(res.data.userInfo))      
          }
            res.data.password = "123"
            setIsLog(true);
            dispatch(userLogin(res.data))
            setErrState("");

        }
      })
      .catch((err) => {
        setErrState(err.err);
      });
    }catch(e){
      console.log(e)
      setErrState("error while sending request"+e);
    }
  }});


  
  if(isLog){
    if(location.state == 'way to buy'){
      return <Navigate to={{pathname:"/shipping"}}/>

    }else{
      return <Navigate to={{pathname:"/home"}}/>

    }
  }




//   async function responsGoogle(response){
//     try{
//       setErrState("")
//       axiosConfig.post("/google/login",response.profileObj)
//       .then((res) => {

//         if(res.data.err){
//           localStorage.setItem('usernumber',null)
//           return setErrState(res.data.err);
//         } 

//         localStorage.setItem('rem',res.data.remember)
//         if(res.data.remember){
//             localStorage.setItem("token",res.data.token)
//             localStorage.setItem("user",JSON.stringify(res.data.userInfo))
//         }
//        localStorage.setItem('usernumber',res.data.userInfo.number)

        
//         dispatch({type:actionTypes.LOGIN,data:res.data})
//         setIsLog(true);
//         setErrState("")
//         console.log("done !")
//       })
//       .catch((err) => {
//         setErrState(err);
//         console.log("error3")
//       });
//     }catch(e){
//       console.log(e)
//       setErrState("error while sending requast"+e);
//     }
    
// }






  return (
    <div className="  ">
<div className="flexcol center ">

<p className="">- login and explore -</p>
<Loginform login={login}/>


{errState}

</div>
  
    </div>
  );
}

export default Login;
