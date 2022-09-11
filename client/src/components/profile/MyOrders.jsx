import React, { useState } from "react";
import {  Link } from "react-router-dom";

function MyOrders(props) {
  const [preview, setpreview] = useState(null);

console.log(props.list)
  return (
    <div className="">
        <div className="">
            <div className="flexcol">
                {props.list.length > 0 ?props.list.map((e)=>{
                    return(
                        <div className="orderProducts">
                                  <Link  state={{data:e.id}}  to={{
                        pathname: "/order/"+e.id}
                      
                     
                      }  ><p> {e.id}</p></Link>
                           
                           <p> {e.ispaid}</p>
                           <p> {e.price}</p>
                          
                        </div>
                    )
                }):"no items found"}
            </div>
        </div>




    </div>
  );
}

export default MyOrders;
