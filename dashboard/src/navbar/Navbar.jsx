import { Routes, NavLink, Route, Router } from "react-router-dom";
import { useState } from "react";
import './nav.css'
import '../App.css'


function Navbar(props) {

  return (
    <div className="navAllBar bc">
     <div className="links flexcol center">
      <NavLink to={{pathname:'/'}} >link</NavLink>
      <NavLink to={{pathname:'/products'}} > products</NavLink>
      <NavLink to={{pathname:'/users'}} >users</NavLink>
      <NavLink to={{pathname:'/addproduct'}} >add product</NavLink>
      <NavLink to={{pathname:'/orders'}} >orders</NavLink>

     </div>

    </div>
  );
}

export default Navbar;
