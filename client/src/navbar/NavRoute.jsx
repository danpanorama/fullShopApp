import { Routes, NavLink, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import '../css/App.css';
import Home from "../pages/home/Home";
import CreateUser from "../pages/login/register/CreateUser";
import Login from "../pages/login/Login";
import CreateStore from "../pages/login/register/store/CreateStore";
import PrivateRoute from "../router/PrivateRout";
import Profile from "../pages/profile/Profile";
import StorePrivateRouter from "../router/StorePrivateRouter";
import StoreProfile from '../pages/profile/storeprofile/StoreProfile'
import Store from "../pages/store/Store";
import UpdateProduct from "../pages/profile/storeprofile/functional/UpdateProduct";
import ProductPage from "../pages/store/ProductPage";

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

<Route path="/createstore" element={<CreateStore/>} exact/>
<Route path="/profile" element={ <PrivateRoute />} exact> 
<Route path="/profile" element={<Profile/>} exact/>


</Route>
<Route path="/storeprofile" element={ <StorePrivateRouter />} exact> 
<Route path="/storeprofile" element={<StoreProfile/>} exact/>


</Route>
<Route path="/store" element={<Store/>} exact/>
<Route path="/update/:id" element={<UpdateProduct/>} exact/>
<Route path="/product/:id" element={<ProductPage/>} exact/>





{/* <Route path="/404" element={<Nofuondpage/>} exact/> */}


</Routes>
   
    </div>
  
  );
}

export default NavRoute;
