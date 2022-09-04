import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";

const StorePrivateRouter = () => {
    
const isLog =  useSelector((state)=>state.user.isLog);
const isStore=  useSelector((state)=>state.user.user);


    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLog && isStore.isStore == 'yes' ? <Outlet /> : <Navigate to="/profile" />;
}




export default StorePrivateRouter 



