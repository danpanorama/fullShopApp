import '../App.css'


function ProductList(props){
    console.log(props.e)
    return(
        <div className="flexcol bc br pad10 w100 ">
     {props.e ? props.e.map((e)=>{
      let immg = e.img.split('upload')
        return(
       <div className="flexrow between w100" key={e.id}>
             <div className="image">
          
          <img src={"http://localhost:3030/file"+immg[1]} alt="" className="img" />
       </div>
       <div className="info_box flexcol  w100">
          <p className="name">name: {e.name}</p>
          <p className="name">price: {e.price}</p>
       </div>
       </div>
        )
     }):""}

        </div>
    )
}

export default  ProductList