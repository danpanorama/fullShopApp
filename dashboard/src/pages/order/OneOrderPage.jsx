
import {useEffect, useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import {useFormik} from "formik"
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig"
import OrderList from '../../components/OrderList';
import { useLocation } from "react-router-dom";
import ProductList from '../../components/ProductList';
import UserInfo from '../../components/UserInfo';


function OneOrderPage(props) {

    let location = useLocation();
console.log(location.state.data);



  


  return (
    <div className="flexrow w100   profile profileregular">

 <div className='profileSidePage w100 '>


<h1 className="header">order  number {location.state.data.id}</h1>
<UserInfo user={location.state.data}/>
<ProductList e={location.state?JSON.parse(location.state.data.products):[]} />
  
 </div>
    </div>
  );
}

export default OneOrderPage;
