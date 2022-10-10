

function CostumerInfoFix(props) {

console.log(props)

  return (
  

<div>

    <div className="grid-3">
        <div className="oneof flexrow center">
           
            <div className="imagecurcule"></div>
            <div className="info"> <h3>costumer info</h3>
                <p> name: {props.all.AllOrdersItems[0].clientname|| ""}</p>
                <p> email: {props.all.AllOrdersItems[0].clientemail|| ""}</p>

            </div>
        </div>
        <div className="oneof flexrow center">
            
            <div className="imagecurcule"></div>
            <div className="info"><h3>shipping to</h3>
            <p>state: {props.all.AllOrdersItems[0].state || ""}</p>
                <p>address: {props.all.AllOrdersItems[0].address || ""}</p>
                <p>phone: {props.all.AllOrdersItems[0].phone|| ""}</p>
                <p>zip code: {props.all.AllOrdersItems[0].zipcode || ""}</p>

            </div>
        </div>
        <div className="oneof flexrow center">
            
            <div className="imagecurcule"></div>
            <div className="info">
                <h3>payment info</h3>

                <p  >date: {props.all.AllOrdersItems[0].pyment  || ""}</p>
                <p  >deliverd: {props.all.AllOrdersItems[0].pymentliverd  || ""}</p>
                <p className={props.all.AllOrdersItems[0].pymentid == 'no' ?"colorroyalblue":"colorgreen"}> <strong  >is paid:  {props.all.AllOrdersItems[0].pymentid  || ""}</strong> </p>


                </div>
        </div>
   
    </div>


</div>
  
  );
}

export default CostumerInfoFix;
