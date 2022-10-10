
 


function CartListFix(props) {



    return (
    
  
<div className=" flexcenter ">
{props.all.AllOrdersItems?props.all.AllOrdersItems.map((e,i)=>{
           
           let immg = e.img?e.img.split('upload'):"";
         
          
            return(
                
                <div key={e.id+i} className="element borderbottom ">
                    <div className="cartcard ">
                        <div className="gridcol-5   between  elecart">
                            <div className="imagecard">
                            <img src={'http://localhost:3030/product/file'+immg[1]} alt="" className="img" />
                            </div>
                          
                            <div className="namediv">
                            <p>{e.name}</p>
                            
                            </div>
                         
                      <p>amount:{e.amount}</p>
                                
                                <p>price for one:{e.productprice}</p>
                                <p>total price:{e.price * e.amount}</p>
       
                          
                          
                        </div>
                        
                    </div>
                   
                </div>
            )
        }):"no no"}
       
</div>
  
    
    );
  }
  
  export default CartListFix;
  