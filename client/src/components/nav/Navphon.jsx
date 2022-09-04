import Navphoncomp from "./Navphoncomp";


function Navphon(props) {



  return (
  

<Navphoncomp card={props.card} activeNavPopUp={props.activeNavPopUp}  disabledPopUp={props.disabledPopUp} deleteall={props.deleteall} setAmount={props.setAmount} decreamNum={props.decreamNum} increamNum={props.increamNum} isActive={props.navPopUp}  cart={props.card.cardItems}/>

  
  );
}

export default Navphon;
