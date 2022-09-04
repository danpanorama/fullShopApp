import React, { useState } from "react";
import '../../css/App.css'
import {  NavLink } from "react-router-dom";

function GoShop(props) {
 

  return (
    <div onClick={props.disabledPopUp} className="goshop h100 w100">
        <p className="text" > {props.titleText} <NavLink  to={'/store' } className="gologbtn">{props.btn}</NavLink></p>

    </div>
  );
}

export default GoShop;
