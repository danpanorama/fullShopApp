import '../css/App.css';
import '../css/home.css';
import Profilecomp from '../components/profile/Profilecomp';
import USerInfo from '../components/profile/USerInfo';
import {useEffect, useState} from 'react'
import AddNewItem from '../components/profile/AddNewItem';
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../store/Actions";
import axiosConfig from "../config/AxiosConfig"
import MyOrders from '../components/profile/MyOrders';


function Profile() {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.users);
    const [activete, setAcctivate] = useState("profile");
    const [list, setlist] = useState([]);



  
    function changePage(e){
      setAcctivate(e.target.id)

    }


    const updateUser = useFormik({
      initialValues:{
        password: "",
        passwordreapet:'',
        name: user.user.name,
        email: user.user.email,
        remember: false,
    },onSubmit:async values  => {
      try{
         await
        axiosConfig
        .post("/register/updateuser", 
        values
        )
        .then((res) => {
          if(res.data.err){
          return setErrState(res.data.err);
  
          }else{
          
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
  


useEffect(()=>{
getAllMyProducts()
},[])



   async function getAllMyProducts(){

    try{
        await
       axiosConfig
       .get("/users/getorders",{params:{id:user.user.id}}
       )
       .then((res) => {
         if(res.data.err){
         return setErrState(res.data.err);
 
         }else{
        
          setlist(res.data.data)
             
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

    }





  return (
    <div className="flexrow w100   profile profileregular">
       <USerInfo activete={activete} changePage={changePage} user={user.user} />

 <div className='profileSidePage'>

  {activete == 'profile'?
     <Profilecomp updateUser={updateUser}  />
     :
     <MyOrders list={list} updateUser={updateUser}  />


}
   

   
 </div>
    </div>
  );
}

export default Profile;
