
import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig"


function Order() {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.user);
    const [activete, setAcctivate] = useState("profile");
    const [list, setlist] = useState([]);


useEffect(()=>{
    getAllProducts()
},[])



   async function getAllProducts(){

    try{
        await
       axiosConfig
       .get("/store/getorders"
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

 <div className='profileSidePage'>


   

   
 </div>
    </div>
  );
}

export default Order;
