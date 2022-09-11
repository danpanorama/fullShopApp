import '../../css/App.css';
import '../../css/home.css';
import {useDispatch,useSelector} from "react-redux";
import UpdateForm from '../../components/profile/UpdateForm';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';


function Profilecomp(props) {



  return (
    <div className="flexcenter firstProfilePageChild ">


 <UpdateForm updateUser={props.updateUser}/>
    </div>
  );
}

export default Profilecomp;
