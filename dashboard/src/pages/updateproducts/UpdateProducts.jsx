

import {useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig"
import { useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import UpdateForm from '../../components/UpdateForm';
import { setProductToUpdate, updateProduct ,cleareUpdateStae} from '../../Redux/Actions/productsAction';

function UpdateProduct(props) {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    let location = useLocation();
    const updateProductState = useSelector((state)=> state.updateState)

    const admin = useSelector((state)=> state.admin)


useEffect(()=>{
  console.log(location.state.data,"::::useeffect")
  
  dispatch(setProductToUpdate(location.state.data))

},[location.state])
    
  const updateItem = useFormik({
    initialValues:{
        id:location.state.data.id,
      img:location.state.data.img,
      name: location.state.data.name,
      cat:location.state.data.cat,
      description:location.state.data.description,
      commends:location.state.data.commends,
      likes:location.state.data.likes,
      price: location.state.data.price,
      storeId: admin.admin.id,
      path1:location.state.data.img 
    
  },onSubmit:async values  => { 
    try{ 

      let dataForm = new FormData();
      if (values.file) {
        dataForm.append("file", values.file, values.file.name);
      }
      let k = JSON.stringify(values);
     dataForm.append('token',admin.token.toString())
      dataForm.append("admin", k);

      dispatch(updateProduct(dataForm));

    }catch(e){
      console.log(e)
      setErrState("error while sending requast"+e);
    }
  }});


  


async function updateImage(){


  try{
    let dataForm2 = new FormData();
    dataForm2.append('file',updateItem.values.file,updateItem.values.file.name);
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
        <p>{updateProductState.updateItem.name}</p>
        <p>{updateProductState.updateItem.price}$</p>

   <UpdateForm updateItem={updateItem}/>
    </div>
  );
}

export default UpdateProduct;
