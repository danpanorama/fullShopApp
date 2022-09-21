import React, { useState } from "react";
import '../css/App.css';
import axiosConfig from "../config/AxiosConfig"
import {useFormik} from "formik"
import { Navigate,NavLink } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";

import CreateUserform from "../components/register/CreateUserform";
import { userLogin } from "../Redux/Actions/userAction";

function CreateUser() {
  
  const dispatch = useDispatch();
  const [isLoggd, setisLoggd] = useState(false);
  const [errState, setErrState] = useState("");

  const createUser = useFormik({
    initialValues:{
      password: "",
      passwordreapet:'',
      name: "",
      email: "",
      remember: false,
  },onSubmit:async values  => {
    try{
       await
      axiosConfig
      .post("/register/createuser", 
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
          localStorage.setItem('usernumber',res.data.number)
            res.data.password = "123"
            setisLoggd(true);
            dispatch(userLogin(res.data))
            setErrState("");

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


  
  if(isLoggd){
    return <Navigate to={{pathname:"/home"}}/>
  }



  return (
    <div className="alllogin flexcenter w100">
    <div className="loginboxBig flexrow">
    <div className="sideLogIn flexcenter">
      
    <div className="centerForm2 flexcenter">
    <p className="padtext">- login and explore -</p>


    <h1>creat user</h1>
  <CreateUserform createUser={createUser} />

  <NavLink to={'/login'}>login</NavLink>

  {errState}


    </div>
    </div>
    <div className="sideImage">
    
    </div>
    </div>
      
        </div>
  );
}

export default CreateUser;
