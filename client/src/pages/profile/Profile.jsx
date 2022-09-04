import '../../css/App.css';
import '../../css/home.css';
import Profilecomp from './Profilecomp';
import USerInfo from '../../components/profile/USerInfo';
import {useEffect, useState} from 'react'
import AddNewItem from '../../components/profile/AddNewItem';
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig"


function Profile() {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.user);


  








  //  async function getAllMyProducts(){

  //   try{
  //       await
  //      axiosConfig
  //      .get("/product/items/get",{params:{id:user.user.id}}
  //      )
  //      .then((res) => {
  //        if(res.data.err){
  //        return setErrState(res.data.err);
 
  //        }else{
        
         
  //            dispatch({type:actionTypes.SET_ALL_ITEMS,data:res.data})
  //            setErrState("");
 
  //        }
  //      })
  //      .catch((err) => {
  //        setErrState(err.err);
  //      });
  //    }catch(e){
  //      console.log(e)
  //      setErrState("error while sending requast"+e);
  //    }

  //   }





  return (
    <div className="   profile profileregular">
       <USerInfo user={user.user} />

 <div className='profileSidePage'>
   

   <Profilecomp   />
 </div>
    </div>
  );
}

export default Profile;
