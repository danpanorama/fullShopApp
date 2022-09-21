import { useEffect } from "react";
import { useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { adminLogin, adminloguot } from "../../Redux/Actions/adminAction";
import {Navigate} from 'react-router-dom'



function LoginAdmin() {
  const dispatch = useDispatch()
  const [nameState,setNameState] = useState('')
  const [passwordState,setPasswordState] = useState('')
  const [rememberState,setRememberState] = useState(false)

  const admin =  useSelector((state)=>state.admin);


function getName(e){
  setNameState(e.target.value)

}
function getPassword(e){
  setPasswordState(e.target.value)

}
function getRemember(e){
  setRememberState(e.target.value)

}




function adminLogIn(e){

  e.preventDefault()
  if(nameState != "" || passwordState != "" ){
    return dispatch(adminLogin({name:nameState,password:passwordState,remember:rememberState}))
  }else{
    console.log('empty');
  }

}

if(admin.isLog){
 return <Navigate to='/users'/>
}

    return (
      <div className="flexcenter">
   <div className="form_Login flexcol center">
    <h3>login</h3>
    <form action="" className="flexcol">
        <input onChange={getName} type="text" className="" />
        <input onChange={getPassword} type="password" className="" />
    <div   className="">
    remember me
        <input type="checkbox"  onChange={getRemember}   />
    </div>
        <button onClick={adminLogIn}>login</button>
    </form>
   </div>
      </div>
    );
  }
  
  export default LoginAdmin;
  