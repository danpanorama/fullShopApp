import './App.css';
import NavRoute from './navbar/NavRoute';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import * as actionTypes from "./store/Actions";


function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type:actionTypes.STILL})  
    dispatch({type:actionTypes.SET})  


  },[])
  return (
    <div className="App">
<NavRoute/>
    </div>
  );
}

export default App;
