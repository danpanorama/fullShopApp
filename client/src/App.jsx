import './App.css';
import './css/media.css';

import NavRoute from './navbar/NavRoute';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "./store/Actions";
import { stillConnected } from './Redux/Actions/userAction';


function App() {
  const err = useSelector((state) => state.err);
 
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(stillConnected())  
    dispatch({type:actionTypes.SET})  


  },[])
  return (
    <div className="App">
      <div className={err.active_message?"consoleMessage":"disableConsole"}>
        <div className={err.type == 'good' ? "goodmsg":'badmessage'}>
          <p>{err.msg}</p>
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
