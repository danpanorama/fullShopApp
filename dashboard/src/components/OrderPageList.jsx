import '../App.css'
import OrderCard from './OrderCard'


function OrderPageList(props){
   
    return(
        <div className="flexcol bc br pad10 w100 ">
         
     {props.e ? props.e.map((e)=>{
      let immg = e.img.split('upload')
     
        return(
       
         <OrderCard  key={e.id} e={e} img={immg} />
            
  
        )
     }):""}

        </div>
    )
}

export default  OrderPageList