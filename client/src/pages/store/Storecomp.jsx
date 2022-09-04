import '../../css/App.css';
import '../../css/profile.css';
import {useDispatch,useSelector} from "react-redux";
import Card from '../../components/store/Card';
import {  Link } from "react-router-dom";


function Storecomp(props) {

const user =  useSelector((state)=>state.user);

  return (
    <div className="flexcenter w100">
    <div className="containert">
      <div className="storebox">
        <h1 className="primery_header">store </h1>
    <div className=" ">

    <div className="container_all">
        <div className="box_inside gridstore">
            {props.array && props.array.length > 0? props.array.map((e)=>{
               {e.amount = 1
              }
               return(
                
                    <Card key={e.id}    e={e}/>
                )

            }):"no items found"}
        </div>
    </div>


  
    </div>
    </div>
      </div>
    </div>
  );
}

export default Storecomp;
