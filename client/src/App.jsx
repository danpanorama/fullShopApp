import './App.css';
import './css/media.css';

import NavRoute from './navbar/NavRoute';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "./store/Actions";


function App() {
  const err = useSelector((state) => state.err);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:actionTypes.STILL})  
    dispatch({type:actionTypes.SET})  


  },[])
  return (
    <div className="App">
      <div className={err.isActive?"consoleMessage":"disableConsole"}>
        <div className={err.type == 'good' ? "goodmsg":'badmessage'}>
          <p>{err.text}</p>
        </div>

      </div>
                  <div className="navtopside"></div>


<div className="flexcenter">
<div className="marginPage">
  <NavRoute/>
</div>
</div>

    </div>
  );
}

export default App;
