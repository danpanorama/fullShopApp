import '../../../css/App.css';
import '../../../css/home.css';
import {useDispatch,useSelector} from "react-redux";
import {  Link } from "react-router-dom";


function Profilecomp(props) {

  return (
    <div className="flexcenter w100">

      <div className="storeProductslist flexcol">
   
        {props.storeProducts.item && props.storeProducts.item.length > 0 ? props.storeProducts.item.map((e)=>{
          

         return(
            <div key={e.id} className="cardstore flexrow">
             <p className="name marginr"> {e.name}</p>
             <p className="price marginr">{e.price}</p>
             <p className="cat marginr">{e.cat}</p>
             <Link  state={{data:e}}  to={{
                pathname: "/update/"+e.id}
              
             
              }  >update</Link>

              <button id={e.id} dan={e.img} title={e.storeId} onClick={props.del}>delete</button>
            </div>
          )
        }):"no storeProductss"}
      </div>



    </div>
  );
}

export default Profilecomp;
