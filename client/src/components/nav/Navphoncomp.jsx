
import '../../css/media.css'
import '../../css/navbar.css'

import NavCart from './NavCart';
import NavphonCart from './NavphonCart';

function Navphoncomp(props) {


  return (
  
<div className="navphon  w100">
  <div className="centerit flexrow w100">
  <div  className="flexrow   posrelative Link">
                 <NavphonCart disabledPopUp={props.disabledPopUp} deleteall={props.deleteall} setAmount={props.setAmount} decreamNum={props.decreamNum} increamNum={props.increamNum} isActive={props.navPopUp}  cart={props.card.cardItems} />
    <div onClick={props.activeNavPopUp} className="flexrow cruser">
    <p>cart</p>
                  {props.card.cardItems && props.card.cardItems.length > 0
                    ? <div className="cartNumber flexcenter"><p className="cartNumberin">{props.card.cardItems.length}</p>
     
                    </div>
                    : 0}
    </div>
                </div>
    <div className="hamburger">
        =
    </div>
  </div>
</div>


  
  );
}

export default Navphoncomp;
