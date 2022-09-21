import { Link } from 'react-router-dom'
import '../App.css'
import '../css/storeProduct.css'

function ItemCard(props){
    return(
        <div className="marginbottom30 padding15 ">
       <div className="card">
       <div className="image">
          
          <img src={'http://localhost:3030/product/file'+props.img[1]} alt="" className="img" />
       </div>
       <div className="info_box flexcol">
          <p className="name">{props.e.name}</p>
          <p className="name">{props.e.price}</p>
       </div>
       </div>
         <div className="buttons">
            <button onClick={()=>{props.deleteItem(props.e)}} className='deleteUpdate ' >delete</button>
            <Link className='updateButton link' to={{pathname:"/updateproduct/" + props.e.id}} state={{ data: props.e }}>update</Link>
         </div>

        </div>
    )
}

export default  ItemCard