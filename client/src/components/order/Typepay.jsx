import {  Link } from "react-router-dom";

import '../../css/App.css'

function Typepay(props) {



    return (
    
  
<div className="  box_of_pay boxshadow   ">
    <div className="header">
<h1>how do you wanna pay</h1>
    </div>
    <div className="paylist">
       <p id='visa' onClick={props.paymethod} className="typepay">visa</p>
    <p id='paypal' onClick={props.paymethod} className="typepay">paypal</p>

    </div>
  
</div>
  
    
    );
  }
  
  export default Typepay;
  