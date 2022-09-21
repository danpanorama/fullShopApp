import { Link } from 'react-router-dom'
import '../App.css'
import '../css/storeProduct.css'

function OrderCard(props){
    return(
        <div className="marginbottom30  padding15 ">
       <div className="card flexrow">
       <div className="">
          <img src={'http://localhost:3030/product/file'+props.img[1]} alt="" className="img" />
       </div>
       <div className="info_box ">
          <p className="name">{props.e.name}</p>
          <p className="name">{props.e.price}</p>
       </div>
       </div>
  

        </div>
    )
}

export default  OrderCard