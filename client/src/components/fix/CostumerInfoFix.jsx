

function CostumerInfoFix(props) {

console.log(props)

  return (
  

<div>

    <div className="grid-3">
        <div className="oneof flexrow center">
           
            <div className="imagecurcule"></div>
            <div className="info"> <h3>costumer info</h3>
                <p> name: {props.all.length>0?props.all[0].clientname: ""}</p>
                <p> email: {props.all.length>0?props.all[0].clientemail: ""}</p>

            </div>
        </div>
        <div className="oneof flexrow center">
            
            <div className="imagecurcule"></div>
            <div className="info"><h3>shipping to</h3>
            <p>state: {props.all.length>0 ?props.all[0].state : ""}</p>
                <p>address: {props.all.length>0 ?props.all[0].address : ""}</p>
                <p>phone: {props.all.length>0?props.all[0].phone : ""}</p>
                <p>zip code: {props.all.length>0 ?props.all[0].zipcode : ""}</p>

            </div>
        </div>
        <div className="oneof flexrow center">
            
            <div className="imagecurcule"></div>
            <div className="info">
                <h3>payment info</h3>

                <p  >date: {props.all.length > 0  ? props.all[0].date: ""}</p>
                <p  >deliverd: {props.all.length > 0 ?props.all[0].isdeliverd: ""}</p>
                <p className={props.all.length > 0  ? props.all[0].ispaid:"" == 'no' ?"colorroyalblue":"colorgreen"}> <strong  >is paid:  {props.all.length > 0 ?props.all[0].ispaid :   ""}</strong> </p>


                </div>
        </div>
   
    </div>


</div>
  
  );
}

export default CostumerInfoFix;
