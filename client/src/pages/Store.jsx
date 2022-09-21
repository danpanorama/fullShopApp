import "../css/App.css";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";
import Storecomp from "../components/store/Storecomp";
import { useEffect, useState } from "react";
import { getStoreProducts } from "../Redux/Actions/productsAction";
import Pagination from "../components/pagenation/Pagination";


function Store() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state ) => state.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayPerPage, setArrayPerPage] = useState(5);

  useEffect(() => {
    dispatch(getStoreProducts());
  }, []);
const indexOfLastProduct = currentPage * arrayPerPage;
const indexOfFirstProduct = indexOfLastProduct - arrayPerPage;
const currentArray = products.items.slice(indexOfFirstProduct,indexOfLastProduct)
const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
   
       <div className="flexcol center">
           <Storecomp array={currentArray} />
           <Pagination paginate={paginate} arrayPerPage={arrayPerPage} totalProducts={products.items.length}/>
      
   
       </div>
  );
}

export default Store;
