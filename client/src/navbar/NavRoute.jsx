import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import '../css/App.css';
import Home from "../pages/Home";
import CreateUser from "../pages/CreateUser";
import Login from "../pages/Login";
import PrivateRoute from "../router/PrivateRout";
import Profile from "../pages/Profile";
import StorePrivateRouter from "../router/StorePrivateRouter";
import Store from "../pages/Store";
import ProductPage from "../pages/ProductPage";
 import Cart from "../pages/Cart";
 import Shipping from "../pages/Shipping";
 import ShippingPrivateReducer from "../router/ShippingPrivateReducer";
import Paypage from "../pages/Paypage";
import PrivateOrederList from "../router/PrivateOrederList";
import PlaceOrder from "../pages/PlaceOrder";
import Order from "../pages/Order";
import OrderFix from "../pages/OrderFixed";


// commit
function NavRoute() {
  return (
    <div className="nav">
<Navbar/>

<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/*" element={<Home/>} exact/>
<Route path="/createuser" element={<CreateUser/>} exact/>
<Route path="/login" element={<Login/>} exact/>
<Route path="/store" element={<Store/>} exact/>
<Route path="/product/:id" element={<ProductPage/>} exact/>
<Route path="/cart" element={<Cart/>} exact/>
<Route path="/paypage" element={<Paypage/>} exact/>

<Route path="/profile" element={ <PrivateRoute />} exact> 
<Route path="/profile" element={<Profile/>} exact/>
</Route>

<Route path="/placeorder" element={ <PrivateOrederList />} exact> 
<Route path="/placeorder" element={<PlaceOrder/>} exact/>
</Route>

<Route path="/shipping" element={ <ShippingPrivateReducer />} exact> 
<Route path="/shipping" element={<Shipping/>} exact/>
</Route>

<Route path="//order/:id" element={ <PrivateRoute />} exact> 
<Route path="/order/:id" element={ <OrderFix />} exact/> 
</Route>










{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}


</Routes>
   
    </div>
  
  );
}

export default NavRoute;
