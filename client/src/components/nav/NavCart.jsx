import { useEffect } from "react";
import GoShop from "../home/GoShop";



function NavCart(props) {



    return (
    
  
  <div className={props.isActive? " navPopUp  ":"disabledNav"}>
    <div className="firstPopChild">
        {props.cart&&props.cart.length > 0 ?

        
    <div className="cardLoop">

        {props.cart.map((e,i)=>{
           
            
            return(
                
                <div key={e.id+i} className="element">
                    <div className="cartcard ">
                        <div className="gridcol-5 colorlightblue  between  elecart">
                            <div className="imagecard">
                            <img src={e.img} alt="" className="img" />
                            </div>
                          
                            <div className="namediv">
                            <p>{e.name}</p>
                            </div>
                            <div className="amountcard divbtninc flexrow">
                                <button className="incbtn" title={JSON.stringify(e)} id={e.id} onClick={props.increamNum}>+</button>
                               <p className="amountnum flexrowcenter">{ e.amount}</p>
                                <button className="incbtn" title={JSON.stringify(e)} id={e.id} onClick={props.decreamNum}>-</button>

                                

                            </div>
                            <div className="info flexcol between">
                                
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
    :<GoShop disabledPopUp={props.disabledPopUp} titleText={'you have no items in cart'} btn={'go shop !'} />}
        

    </div>

  <div className={"butbuttondiv flexcenter"}>
  <button disabled={props.cart&&props.cart.length > 0 ? false:true} className={props.cart&&props.cart.length > 0 ? "buybtn":"butbuttondivdisabled"}>buy </button>
  </div>
          
            </div>
  
    
    );
  }
  
  export default NavCart;
  