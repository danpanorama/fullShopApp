
import '../../css/App.css'

function Paybox(props) {

let countnum;

    return (
    
  
<div className="  allpaybox  ">
    <div className="table flexcor">
        <div className="flexrow between">
            <p className="title padding15">pay</p>
            <p className="answare padding15">{props.total}</p>
        </div>
        <div className="flexrow between">
            <p className="title padding15">shipping</p>
            <p className="answare padding15 ">10$ + {countnum =(props.total + 10 )}</p>
        </div>
        <div className="flexrow between borderbottom">
            <p className="title padding15">tax</p>
            <p className="answare padding15 ">{countnum =countnum + (0.17*100)}</p>
        </div>
        <div className="flexrow between">
            <p className="title padding15">total pay</p>
            <p className="answare padding15">{countnum}</p>
        </div>
        
     

    </div>
 
   <div onClick={props.buyItem} className={props.class}>
           {props.btntext}
        </div>
   
  
</div>
  
    
    );
  }
  
  export default Paybox;
  