import '../../css/App.css';
import '../../css/cart.css';
import { NavLink } from "react-router-dom";
import Typepay from '../../components/order/Typepay';

function Paypage(props) {
  

  return (
    <div className=" flexcenter ">
       

 

     <div className="box">
     <NavLink to="/placeorder"  >orderlist </NavLink>
     </div>
     <Typepay/>



   
 
    </div>
  );
}

export default Paypage;
