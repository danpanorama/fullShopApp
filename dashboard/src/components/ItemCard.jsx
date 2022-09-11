import '../App.css'


function ItemCard(props){
    return(
        <div className="flexcol ">
         <div className="image">
          
            <img src={"http://localhost:3030/file"+props.img} alt="" className="img" />
         </div>
         <div className="info_box flexcol">
            <p className="name">{props.e.name}</p>
            <p className="name">{props.e.price}</p>
         </div>

        </div>
    )
}

export default  ItemCard