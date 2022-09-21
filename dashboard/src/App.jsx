import './App.css';
import NavRoute from './navbar/NavRoute';
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from 'react';
import { stillConnected } from './Redux/Actions/adminAction';

function App() {
const dispatch = useDispatch();

useEffect(()=>{
dispatch(stillConnected())
},[])




  return (
    <div className="">
      <div className="">
        <NavRoute/>
      </div>
      
 
    </div>
  );
}

export default App;
