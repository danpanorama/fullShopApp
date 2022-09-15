

function CostumerInfo(props) {

console.log(props)

  return (
  

<div>

    <div className="grid-3">
        <div className="oneof flexrow center">
           
            <div className="imagecurcule"></div>
            <div className="info"> <h3>costumer info</h3>
                <p> name: {props.user.user.name|| ""}</p>
                <p> email: {props.user.user.email|| ""}</p>

            </div>
        </div>
        <div className="oneof flexrow center">
            
            <div className="imagecurcule"></div>
            <div className="info"><h3>shipping to</h3>
            <p>state: {props.item.shipping.state || ""}</p>
                <p>address: {props.item.shipping.address || ""}</p>
                <p>phone: {props.item.shipping.phone|| ""}</p>
                <p>zip code: {props.item.shipping.zipcode || ""}</p>

            </div>
        </div>
        <div className="oneof flexrow center">
            
            <div className="imagecurcule"></div>
            <div className="info">
                <h3>payment info</h3>
                <p>pay method: {props.pyment.ispaid  || ""}</p>
                <p>deliverd: {props.pyment.isdeliverd ||""}</p>
                <p>price: {props.pyment.price  ||""}</p>
                <p  >is payed: {props.pyment.ispaid  || ""}</p>


                </div>
        </div>
   
    </div>


</div>
  
  );
}

export default CostumerInfo;