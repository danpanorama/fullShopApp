import { Link } from "react-router-dom";



function OrderList(props){

    return(
        <div className="bc br pad10 w100 ">
            <table className="table  ">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>price</th>
                    <th>is paid</th>
                </tr>
                {props.lists? props.lists.map((e)=>{
                    return(
                       
                        <tr className="tr" key={e.id}> 
                            <td><Link to={{pathname:'/ordernumber/'+e.id}}state={{data:e}} >{e.id}</Link></td>
                            <td>{e.username}</td>
                            <td>{e.useremail}</td>
                            <td>{e.price}</td>
                            <td>{e.ispaid}</td>
                        </tr>
                        
                    )
                }) :""}
            </table>

        </div>
    )
}

export default  OrderList