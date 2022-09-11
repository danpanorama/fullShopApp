import {  NavLink } from "react-router-dom";

import '../../css/App.css'

function Typepay(props) {



    return (
    
  
<div className="  box_of_pay boxshadow   ">
    <div className="header">
<h1>how do you wanna pay</h1>
    </div>
    <div className="paylist">
    <NavLink to="/placeorder"  >     <p className="typepay">visa</p></NavLink>
    <NavLink to="/placeorder"  >  <p className="typepay">paypal</p></NavLink>

    </div>
  
</div>
  
    
    );
  }
  
  export default Typepay;
  