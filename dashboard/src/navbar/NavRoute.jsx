import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/home/Home";
import Users from '../pages/users/Users'
import AddProduct from '../pages/addproducts/AddProduct';
import ProductPage from "../pages/productlist/ProductPage";
import UpdateProduct from "../pages/updateproducts/UpdateProducts";
import Order from "../pages/order/Order";
import OneOrderPage from "../pages/order/OneOrderPage";
import LoginAdmin from "../pages/login/LoginAdmin";
import PrivateRoute from "../routes/PrivateRout";



function NavRoute() {
  return (
    <div className="flexrow theAllDiv">
      
<Navbar/>
<div className="allpagesdiv">



<Routes>

<Route path="/login" element={<LoginAdmin/>} exact/>


<Route path="/" element={<Home/>} exact/>
<Route path="/*" element={<Home/>} exact/>

<Route path="/users" element={<Users/>} exact/>




<Route path="/updateproduct/:id" element={ <PrivateRoute />} exact> 
<Route path="/updateproduct/:id" element={<UpdateProduct/>} exact/>

</Route>


<Route path="/products" element={ <PrivateRoute />} exact> 
<Route path="/products" element={<ProductPage/>} exact/>

</Route>



<Route path="/orders" element={ <PrivateRoute />} exact> 
<Route path="/orders" element={<Order/>} exact/>
</Route>

<Route path="/ordernumber/:id" element={ <PrivateRoute />} exact> 
<Route path="/ordernumber/:id" element={<OneOrderPage/>} exact/>
</Route>

<Route path="/addproduct" element={ <PrivateRoute />} exact> 
<Route path="/addproduct" element={<AddProduct/>} exact/>
</Route>




{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}


</Routes>
</div>
   
    </div>
  
  );
}

export default NavRoute;
