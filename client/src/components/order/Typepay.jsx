import {  Link } from "react-router-dom";

import '../../css/App.css'

function Typepay(props) {



    return (
    
  
<div className="  box_of_pay boxshadow   ">
    <div className="header">
<h1>how do you wanna pay</h1>
    </div>
    <div className="paylist">
    <Link   to={{pathname:"/placeorder",state:"visa"}}  >     <p className="typepay">visa</p></Link>
    <Link to={{pathname:"/placeorder",state:"paypal"}}   >  <p className="typepay">paypal</p></Link>

    </div>
  
</div>
  
    
    );
  }
  
  export default Typepay;
  