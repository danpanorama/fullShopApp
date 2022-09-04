import '../../../css/App.css';
import '../../../css/home.css';
import StoreProfilecomp from './StoreProfilecomp';
import USerInfo from '../../../components/profile/USerInfo';
import {useState} from 'react'
import AddNewItem from '../../../components/profile/AddNewItem';
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../../../store/Actions";
import axiosConfig from "../../../config/AxiosConfig"
import { useEffect } from 'react';


function Profile() {
    const [errState, setErrState] = useState("");
    const dispatch = useDispatch();
    const user =  useSelector((state)=>state.user);
    const item =  useSelector((state)=>state.item);
    const storeProducts =  useSelector((state)=>state.store);

    

    
  const addItem = useFormik({
    initialValues:{
      img:"",
      name: "",
      cat:'',
      description:'',
      price: "",
      storeId: user.user.id,
    
  },onSubmit:async values  => {
    try{

    
      let dataForm = new FormData();
      if(values.file ){
        console.log('hay')
      dataForm.append('file',values.file,values.file.name);

      }
      let k = JSON.stringify(values)
      dataForm.append('user',k)
       await
      axiosConfig
      .post("product/items/add", 
      dataForm
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


  







   async function deleteItem(e){

        try{
            await
           axiosConfig
           .post("/product/items/del", 
           {id:e.target.id,path:e.target.getAttribute('dan'),storeId:user.user.id,productStoreId:e.target.title}
           )
           .then((res) => {
             if(res.data.err){
              console.log(res.data.err)
             return setErrState(res.data.err);
     
             }else{
            
                 dispatch({type:actionTypes.DEL_ITEM,data:e.target.id})
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

    useEffect(()=>{
        getAllMyProducts()
    },[])

   async function getAllMyProducts(){

    try{
        await
       axiosConfig
       .get("/product/items/get",{params:{id:user.user.id}}
       )
       .then((res) => {
         if(res.data.err){
         return setErrState(res.data.err);
 
         }else{
        
          console.log(res.data)
      
             dispatch({type:actionTypes.SET_STORE_PRODUCTS,data:res.data})
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
    <div className="containert  profile">
    <div>  
        <USerInfo user={user.user} />
       </div>
     <div className='profileSidePage'>
     {user.user.isStore?

<AddNewItem addItem={addItem} />
:
""
}

  <StoreProfilecomp del={deleteItem} storeProducts={storeProducts} item={item}  />
 
  
  </div>
    </div>
  );
}

export default Profile;
