
import { NavLink, } from "react-router-dom";


function NavProfileBtn(props) {
  return (
   <div className="alighn posre ">
     <div onClick={props.activeNavPopUpCard} className="padlinkf">
              <div
                  
                  className="Link"
                 
                >
               Hi,   {props.user.user.name} ^
                 
                </div>

              </div>
              
              <div className={props.navPopUpCard?"linksActive flexcol " :"linksDisable"}>
                <NavLink activeclassname="active_Link" className=" cardlinkr  brbottom" to="/profile">
              profile
            </NavLink>

            <div className="cardlinkr logout" onClick={props.logout}>
              logout
            </div>
                </div>
   </div>
  );
}

export default NavProfileBtn;
