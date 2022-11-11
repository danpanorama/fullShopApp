import '../../css/App.css';
import '../../css/home.css';
import GoShop from '../home/GoShop';
import { NavLink } from "react-router-dom";

function CartComp(props) {
  
   let total =0


  return (
    <div className="flexcol w100   center ">

        
    <div className="firstPopChild">
        {props.cart&&props.cart.length > 0 ?

    <div>     

    <div className="cardLoop">

        {props.cart.map((e,i)=>{
           
           let immg = e.img.split('upload');
           total = total + (e.price * e.amount);
          
            return(
                
                <div key={e.id+e.name } className="element mardgd  boxshadow">
                    <div className="cartcard ">
                        <div className="gridcol-5   between  elecart">
                            <div className="imagecard">
                            <img src={'http://localhost:3030/product/file'+immg[1]} alt="" className="img" />
                            </div>
                          
                            <div className="namediv">
                            <strong>{e.name}</strong>
                            </div>
                            <div className="amountcard divbtninc flexrow">
                                <button className="incbtn" title={JSON.stringify(e)} id={e.id} onClick={props.increamNum}>+</button>
                               <p className="amountnum flexrowcenter">{ e.amount}</p>
                                <button className="incbtn" title={JSON.stringify(e)} id={e.id} onClick={props.decreamNum}>-</button>

                                

                            </div>
                            <div className="info flexrow between">
                                
                                <p>price for one:{e.price}</p>
                                <p>total price:{e.price * e.amount}</p>

                            </div>
                           
                            <div className="deletall">
                                <button className="logout" id={e.id} onClick={props.deleteall}>delete</button>
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            )
        })}
   

    </div>
    <div className="w100 flexrowend">
        <p className='textcolor text28'>total : <strong>{total}$</strong></p>
    </div>
    
    <div className={"w100 flexrow between bordertop"}>
        
  <NavLink to="/store"  className={ "sopping"}>continue to shopping </NavLink>

    {/* <button onClick={props.buyproduct}  className={props.cart&&props.cart.length > 0 ? "buybtn":"butbuttondivdisabled"}>buy {total}$ </button> */}
 <div id={total} onClick={props.buyproduct}  className={props.cart&&props.cart.length > 0 ? "buybtn":"butbuttondivdisabled"}>buy {total}$</div>
  
  </div>
    </div>   
    :
<div className="element flexcenter">    <GoShop disabledPopUp={props.disabledPopUp} titleText={'you have no items in cart'} btn={'go shop !'} />
</div>
}
        

    </div>


          
           
  
    
     
    </div>
  );
}

export default CartComp;
