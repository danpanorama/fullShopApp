import { Routes, NavLink, Route, Router } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/navbar.css";
import "../css/media.css";

import InputSearch from "../components/nav/InputSearch";
import axiosConfig from "../config/AxiosConfig";
import NavProfileBtn from "../components/nav/NavProfileBtn";
import {userloguot} from '../Redux/Actions/userAction'
import {clearCart} from '../Redux/Actions/cartAction'


// commit
function Navbar(props) {
  const users = useSelector((state) => state.users);
  const cart = useSelector((state) => state.cart);
  const [popUpNav,setPopUpNav]= useState(false)
  const dispatch = useDispatch();


  function logout() {
    dispatch(userloguot());
    dispatch(clearCart());
  }

  function navPopUp(){
    setPopUpNav(!popUpNav)
  }
 



  return (
    <div className="navAllBar">
      <div className="allnav navbarFirstChild">
        <div className="flexrow allnavchild   ">
          <div className="flexrow  center" >
            <div className="logo">
              <h1>logo</h1>
            </div>
            <NavLink activeclassname="active_Link" className="Link" to="/">
              home
            </NavLink>
            <NavLink activeclassname="active_Link" className="Link" to="/store">
              store
            </NavLink>
            <NavLink activeclassname="active_Link" className="Link" to="/about">
              about
            </NavLink>
          </div>
          <InputSearch />

          <div className="flexrow ">
            {users.isLog ? (
              <div className="flexrow center">
                <NavProfileBtn
                  user={users}
               popUpNav={popUpNav}
               activePopUpNav={navPopUp}
                  logout={logout}
                />

            
              </div>
            ) : (
              <div className="flexrow center ">
                <NavLink
                  activeclassname="active_Link"
                  className="Link"
                  to="/login"
                >
                  login
                </NavLink>
                <NavLink
                  activeclassname="active_Link"
                  className="Link"
                  to="/createuser"
                >
                  REGISTER
                </NavLink>
              </div>
            )}

            <div className="flexrow posrelative Link">
              {/* <NavCart disabledPopUp={disabledPopUp} deleteall={deleteall} setAmount={setAmount} decreamNum={decreamNum} increamNum={increamNum} isActive={navPopUp}  cart={card.cardItems} /> */}

              <div className="flexrow cruser">
                <NavLink
                  activeclassname="active_Link"
                  className="Link"
                  to="/cart"
                >
                  cart{" "}
                  {cart.cardItems && cart.cardItems.length > 0 ? (
                    <div className="cartNumber flexcenter">
                      <p className="cartNumberin">{cart.cardItems.length}</p>
                    </div>
                  ) : (
                    0
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Navbar;
