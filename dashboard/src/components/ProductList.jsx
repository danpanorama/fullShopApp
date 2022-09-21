import '../App.css'
import ItemCard from './ItemCard'


function ProductList(props){
   
    return(
        <div className="grid-4-4 bc br pad10 w100 ">
         
     {props.e ? props.e.map((e)=>{
      let immg = e.img.split('upload')
     
        return(
       
         <ItemCard deleteItem={props.deleteItem} key={e.id} e={e} img={immg} />
            
  
        )
     }):""}

        </div>
    )
}

export default  ProductList