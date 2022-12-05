

function CostumerInfoFix(props) {

console.log(props)

  return (
  

<div>

    <div className="grid-3">
        <div className="oneof flexrow center">
           
            <div className="imagecurcule"></div>
            <div className="info"> <h3>costumer info</h3>
                <p> name: {props.all.clientname}</p>
                <p> email: {props.all.clientemail}</p>

            </div>
        </div>
        <div className="oneof flexrow center">
            
            <div className="imagecurcule"></div>
            <div className="info"><h3>shipping to</h3>
            <p>state: {props.all.state }</p>
                <p>address: {props.all.adress }</p>
                <p>phone: {props.all.phon }</p>
                <p>zip code: {props.all.zipcode }</p>

            </div>
        </div>
        <div className="oneof flexrow center">
             
            <div className="imagecurcule"></div>
            <div className="info">
                <h3>payment info</h3>

                <p  >date: { props.all.date}</p>
                <p  >deliverd: {props.all.isdeliverd}</p>
                <p className={ props.all.ispaid == 'yes' ? "colorgreen" : "colorroyalblue"}> <strong  >is paid:  {props.all.ispaid}</strong> </p>


                </div>
        </div>
   
    </div>


</div>
  
  );
}

export default CostumerInfoFix;
