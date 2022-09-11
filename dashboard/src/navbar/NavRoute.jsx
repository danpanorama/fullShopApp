import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/home/Home";
import Users from '../pages/users/Users'
import AddProduct from '../pages/addproducts/AddProduct';
import ProductPage from "../pages/productlist/ProductPage";
import UpdateProduct from "../pages/updateproducts/UpdateProducts";
import Order from "../pages/order/Order";


function NavRoute() {
  return (
    <div className="flexrow theAllDiv">
      
<Navbar/>
<div className="allpagesdiv">



<Routes>
<Route path="/" element={<Home/>} exact/>
<Route path="/*" element={<Home/>} exact/>

<Route path="/users" element={<Users/>} exact/>


<Route path="/addproduct" element={<AddProduct/>} exact/>
<Route path="/products" element={<ProductPage/>} exact/>
<Route path="/updateproduct/:id" element={<UpdateProduct/>} exact/>
<Route path="/orders" element={<Order/>} exact/>



{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}


</Routes>
</div>
   
    </div>
  
  );
}

export default NavRoute;
