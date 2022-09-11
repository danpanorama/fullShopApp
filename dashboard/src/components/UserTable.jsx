


function UserTable(props){
    return(
        <div className="">
            <table className="table">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    
                </tr>
                {props.users? props.users.map((e)=>{
                    return(
                        <tr className="tr">
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                        </tr>
                    )
                }) :""}
            </table>

        </div>
    )
}

export default  UserTable