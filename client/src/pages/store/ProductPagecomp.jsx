import "../../css/App.css";
import "../../css/profile.css";


function ProductPagecomp(props) {

    let immg = props.product.img.split('upload');
    let url = 'http://localhost/product/file'+immg[1]

  return (
    <div className=" ">
      <div className="containert  flexcenter">
      

        <div className="box_inside flexcenter ">
          <div className="flexrow allpagedivd h100 ">
            <div className="sideA">
              <div className="imageproduct">
                <img src={'http://localhost:3030/product/file'+immg[1]} alt="" className="img" />
              </div>
            </div>

            <div className="sideB ">
              <div className="boxsize flexcol">
                <div className="info">
                  <p className="name">{props.product.name}</p>
                  <p className="discription">{props.product.description}</p>
                </div>
                <div className="revuseandprice flexrow">
              <div className="revusediv flexrow">
             <p className="rev"> revuse </p><button>like</button>
              </div>
                </div>

                <div className="addtocarddiving ">
                
                 
               <div className="addfirstChild">
               <p className="pricestorepage paddforstprepage bbotoom ">{props.product.price * props.amountState}$</p>
                  <div className="amount flexrow paddforstprepage bbotoom ">
                    <button className="incbtn margr borr3" onClick={props.decreamNum}>-</button>
                    <p className="amountnum flexrowcenter borr3 "     >{props.amountState }  </p>
                    <button className="incbtn margl borr3" onClick={props.increamNum}>+</button>
                  </div>
                <div className="add_buttons paddforstprepage ">
                <button onClick={props.addToCard} title={props.product.data}>
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
