import React, { useState } from "react";
import '../../css/App.css'
import {  NavLink } from "react-router-dom";

function GoShop(props) {
 

  return (
    <div >
         <NavLink  to={props.url } className="gologbtn">back</NavLink>

    </div>
  );
}

export default GoShop;
