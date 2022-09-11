import axiosConfig from "../../config/AxiosConfig";
import { useState } from "react";
import { useEffect } from "react";
import UserTable from "../../components/UserTable";
function Users() {

  const [errState, setErrState] = useState("");
  const [userarray, setUserArray] = useState([]);



  
  useEffect(() => {
    getAllMyProducts();
  }, []);

  async function getAllMyProducts() {
    try {
      await axiosConfig
        .get("/store/getallusers")
        .then((res) => {
          if (res.data.err) {
            return setErrState(res.data.err);
          } else {
            console.log(res.data);

            setErrState("");
            setUserArray(res.data.data)
          }
        })
        .catch((err) => {
          setErrState(err.err);
        });
    } catch (e) {
      console.log(e);
      setErrState("error while sending requast" + e);
    }
  }



    return (
      <div className="App">
    <h1 className="header">get all users</h1>
    <div className="bc pad10 br">
         <UserTable users={userarray}/>
    </div>
 
      </div>
    );
  }
  
  export default Users;
  