import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from "react-redux";

const ShippingPrivateReducer = () => {
    
const isLog =  useSelector((state)=>state.users.isLog);
const cart =  useSelector((state)=>state.cart);

    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLog ? <Outlet /> : <Navigate state={'way to buy'} to="/login" />;
}




export default ShippingPrivateReducer 



