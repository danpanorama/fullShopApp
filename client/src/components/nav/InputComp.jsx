
import axiosConfig from "../../config/AxiosConfig"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/Actions";

function InputComp() {
  const [errState, setErrState] = useState("");


  function seacrch(){

  }

  async function seacrchAutocomplete(e){

    try{
      await
     axiosConfig
     .get("/product/search",{params:{txt:e.target.id}}
     
     )
     .then((res) => {
       if(res.data.err){
       return setErrState(res.data.err);

       }else{
        
         console.log(res.data)
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
    
  
  <div className="inputSearch  flexrowcenter">
              <input onChange={seacrchAutocomplete} type="text" className="inputsearch" />
              <button  className="searchbtn">search</button>
            </div>
  
    
    );
  }
  
  export default InputComp;
  