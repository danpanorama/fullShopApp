import "../../css/App.css";
import "../../css/profile.css";


function ProductPagecomp(props) {
    let immg = props.product.img ?props.product.img.split('upload'):"";
    let url = 'http://localhost/product/file'+immg[1]

  return (
    
    <div className=" ">
      <div className="containert  flexcenter">
      

        <div className="h50vh flexcenter width100 ">
          <div className="flexrow allpagedivd h100 ">
            <div className="sideA">
              <div className="imageproduct">
                <img src={'http://localhost:3030/product/file'+immg[1]} alt="" className="img" />
              </div>
            </div>

            <div className="sideB ">
              <div className="boxsize flexcol">
                <div className=" ">
                  <p className="name marginbottom40">{props.product.name}</p>
                  <p className="discription marginbottom40">{props.product.description}</p>
                </div>
                <div className="revuseandprice flexrow">
              <div className="revusediv flexrow marginbottom40">
             <p className="rev"> revuse 
             {props.product.likes?JSON.parse(props.product.likes).map((e)=>{  
              let total = 0;
              total = total +  parseInt(e.rating)
               return(
                <div key={e} className="g">
                  { total}
                </div>
               )
                }):""} 
                </p>
  {props.islog?
 <select name="" onChange={props.likeProduct} id={props.product.id}>
 <option value="1">1</option>
 <option value="2">2</option>
 <option value="3">3</option>
 <option value="4">4</option>
 <option value="5">5</option>

</select>
:"you need to log in"  
}
              </div>
                </div>

                <div className="addtocarddiving ">
                
                 
               <div className="addfirstChild">
               <p className="pricestorepage paddforstprepage bbotoom flexrow between "> <p>price:</p> {props.product.price * props.amountState}$</p>
               <div className="flexrow between paddforstprepage bbotoom">
               <p>revuse</p>
                </div>
                 
                  <div className="amount flexrow paddforstprepage bbotoom flexrow between">
                    <p>qualety:</p>
                   <div className=" flexrow    between">
                   <button className="incbtn margr borr3" onClick={props.decreamNum}>-</button>
                    <p className="amountnum flexrowcenter borr3 "     >{props.amountState }  </p>
                    <button className="incbtn margl borr3" onClick={props.increamNum}>+</button>
                   </div>

                  </div>
                  <div className="flexrow between borr3 paddforstprepage ">
                <p>status</p>
                <p>available</p>
                </div>
                <div className="add_buttons  ">
                <button onClick={props.addToCard} className="addtobtn" title={props.product.data}>
                    add to card
                  </button>
                </div>
               </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPagecomp;
