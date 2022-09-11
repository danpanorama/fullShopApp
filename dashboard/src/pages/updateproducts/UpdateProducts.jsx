

import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig"
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom'

function UpdateProduct(props) {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    let location = useLocation();


    
  const addItem = useFormik({
    initialValues:{
        id:location.state.data.id,
      img:location.state.data.img,
      name: location.state.data.name,
      cat:location.state.data.cat,
      description:location.state.data.description,
      commends:location.state.data.commends,
      likes:location.state.data.likes,
      price: location.state.data.price,
      storeId: 1,
    
  },onSubmit:async values  => { 
    try{

       await
      axiosConfig
      .post("product/items/update", 
      values
      )
      .then((res) => {
        if(res.data.err){
        return setErrState(res.data.err);

        }else{
       console.log(res.data)
        
            dispatch({type:actionTypes.ADD_ITEM,data:res.data})
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


  


async function updateImage(){


  try{
    let dataForm2 = new FormData();
    dataForm2.append('file',addItem.values.file,addItem.values.file.name);
    dataForm2.append('oldurl',location.state.data.img);
    await
   axiosConfig
   .post("product/items/updateimg", 
   dataForm2
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
   setErrState("error while sending requast"+e);
 }
  
}







  return (
    <div className="flexcenter containert w100">
        <h1>update</h1>
        {location.state.data.name}
{/* 
        <UpdateItem  updateImage={updateImage} addItem={addItem}/>
        <div className="currentProduct">
          {location.state.data.name}
          
        </div> */}
   
    </div>
  );
}

export default UpdateProduct;
