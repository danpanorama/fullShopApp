


function UserInfo(props){



    let shipping  = JSON.parse(props.user.shipping)

    console.log(props)
    return(
        <div className="flexcenter w100 bc br pad10">
           <div className="  flexrow theUserInfo ">
         

         <div className="side">   <h3>client</h3>
         <p>  client name: <strong>{props.user.username}</strong></p>
           <p>client email: <strong>{props.user.useremail}</strong></p>
           
         </div>

         <div className="side">
          <h3>shipping</h3>
         <p>state: <strong>{shipping.state}</strong></p>
           <p>address|:<strong> {shipping.address}</strong></p>
           <p>zip code: <strong>{shipping.zipcode}</strong></p>
           
         </div>
         <div className="side">
            <h3>payment</h3>
         <p>is he paid :<strong> {props.user.ispaid}</strong></p>
           <p>deliverd? : <strong>{props.user.isdeliverd}</strong></p>
           <p>total price: <strong>{props.user.price}</strong></p>
           
         </div>

           </div>
          
        </div>
    )
}

export default  UserInfo