


function USerInfo(props) {


    return (
      <div className="flexcenter userbar">
  
  
    <div className="box w100">
      
     <h3>Welcome {props.user.name}</h3>
     <p>{props.user.name} </p>
     <p>{props.user.email} </p>
   
    </div>
      </div>
    );
  }
  
  export default USerInfo;
  