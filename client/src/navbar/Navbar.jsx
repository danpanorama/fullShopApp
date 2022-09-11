import { Routes, NavLink, Route, Router } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../store/Actions";
import "../css/navbar.css";
import "../css/media.css";

import InputSearch from "../components/nav/InputSearch";
import NavCart from "../components/nav/NavCart";
import axiosConfig from "../config/AxiosConfig";
import Navphon from "../components/nav/Navphon";
import NavProfileBtn from "../components/nav/NavProfileBtn";

// commit
function Navbar(props) {
  const user = useSelector((state) => state.user);
  const card = useSelector((state) => state.item);
  const dispatch = useDispatch();
  const [navPopUp, setNavPopUp] = useState(false);
  const [navPopUpCard, setNavPopUpCard] = useState(false);

  const [amountState, setAmount] = useState(1);
  const [total, settotal] = useState(0);
  const [errState, setErrState] = useState("");

  function logout() {
    dispatch({ type: actionTypes.LOGOUT });
    dispatch({ type: actionTypes.LOGOUT_ITEMS });
  }

  function increamNum(e) {
    let data = JSON.parse(e.target.title);
    console.log(data);

    dispatch({ type: actionTypes.ADD_PRODUCT, data: data, amount: 1 });
  }

  function deleteall(e) {
    dispatch({ type: actionTypes.DELETE_ALL, data: e.target.id });
  }

  function decreamNum(e) {
    let data = JSON.parse(e.target.title);
    console.log(data);

    dispatch({ type: actionTypes.REMOVE_PRODUCT, data: data, amount: 1 });
  }

  function activeNavPopUp() {
    setNavPopUp(!navPopUp);
  }

  function activeNavPopUpCard() {
    setNavPopUpCard(!navPopUpCard);
  }
  function disabledPopUp() {
    setNavPopUp(false);
  }

  return (
    <div className="navAllBar">
      <div className="allnav navbarFirstChild">
        <div className="flexrow allnavchild   ">
          <div className="flexrow  center" onClick={disabledPopUp}>
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
            {user.isLog ? (
              <div className="flexrow center">
                <NavProfileBtn
                  user={user}
                  navPopUpCard={navPopUpCard}
                  activeNavPopUpCard={activeNavPopUpCard}
                />

                <div onClick={logout} className="logout">
                  <p>logout</p>
                </div>
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
                  {card.cardItems && card.cardItems.length > 0 ? (
                    <div className="cartNumber flexcenter">
                      <p className="cartNumberin">{card.cardItems.length}</p>
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

      <Navphon
        card={card}
        activeNavPopUp={activeNavPopUp}
        disabledPopUp={disabledPopUp}
        deleteall={deleteall}
        setAmount={setAmount}
        decreamNum={decreamNum}
        increamNum={increamNum}
        isActive={navPopUp}
        cart={card.cardItems}
      />
    </div>
  );
}

export default Navbar;
