import '../../css/App.css';
import '../../css/store.css';
import {  Link } from "react-router-dom";

function Card(props) {
    let immg = props.e?props.e.img.split('upload'):"";
    let url = 'http://localhost/product/file'+immg[1]
  return (
    <div className="card">
         
        <div className="cardFirstChild">
        <Link  state={{data:props.e}}  to={{
                        pathname: "/product/"+props.e.id}
                      
                     
                      }  >
            <div className="image">
                <img src={'http://localhost:3030/product/file'+immg[1]} alt="" className="img" />

            </div></Link>
            <div className="infobox flexcol">
                <div className="name padtext">
                    {props.e.name}

                </div>
                <div className="revuse padtext">
               
revuse:

               </div>
             
                <div className="price padtext">
                  <strong>{props.e.price}$</strong>  
                    
                </div>
              
            </div>
        </div>




  
    </div>
  );
}

export default Card;
