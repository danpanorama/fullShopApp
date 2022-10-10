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

import Pagination from '../components/pagenation/Pagination';
function Profile() {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.users);
    const [activete, setAcctivate] = useState("profile");
    const [list, setlist] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [arrayPerPage, setArrayPerPage] = useState(5);



  
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


    const indexOfLastProduct = currentPage * arrayPerPage;
    const indexOfFirstProduct = indexOfLastProduct - arrayPerPage;
    const currentArray = list.slice(indexOfFirstProduct,indexOfLastProduct)
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    


  return (
    <div className="flexrow w100   profile profileregular">
       <USerInfo activete={activete} changePage={changePage} user={user.user} />

 <div className='profileSidePage'>

  {activete == 'profile'?
     <Profilecomp updateUser={updateUser}  />
     :
    <div className="">
       <MyOrders list={currentArray} updateUser={updateUser}  />
       <Pagination paginate={paginate} arrayPerPage={arrayPerPage} totalProducts={list.length} />
    </div>


}
   

   
 </div>
    </div>
  );
}

export default Profile;
