import React, { useState } from "react";
import { Link } from "react-router-dom";

function MyOrders(props) {
  const [preview, setpreview] = useState(null);

  return (
    <div className="">
      <div className="">
        <table className="table  ">
          <tr>
            <th>id</th>
            <th>is payed</th>
            <th>price</th>
          </tr>
          {props.list.length > 0
            ? props.list.map((e) => {
                return (
                  <tbody className={e.ispaid == 'yes' ? "paid":"notpaid"}>
                    <tr className="brbottom">
                      <td>
                        {" "}
                        <Link
                          state={{ data: e.id }}
                          to={{
                            pathname: "/order/" + e.id,
                          }}
                        >
                          <p> {e.id}</p>
                        </Link>
                      </td>

                      <td> {e.ispaid}</td>
                      <td> {e.price}</td>
                    </tr>
                  </tbody>
                );
              })
            : "no items found"}
        </table>
      </div>
    </div>
  );
}

export default MyOrders;
