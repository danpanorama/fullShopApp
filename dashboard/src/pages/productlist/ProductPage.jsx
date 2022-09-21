import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";
import { cleareUpdateStae, getStoreProductsAction } from "../../Redux/Actions/productsAction";
import ProductList from "../../components/ProductList";

function ProductPage() {
  const [errState, setErrState] = useState("");
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.admin);
  const products = useSelector((state) => state.products);



  async function deleteItem(e) {
    try {
      console.log(e)
      await axiosConfig
        .post("/product/items/del", {
          id: admin.admin.id,
          path: e.img,
          isStore: admin.admin.isStore, 
          productStoreId: e.id,
          token:admin.token
        })
        .then((res) => {
          if (res.data.err) {
            return setErrState(res.data.err);
          } else {
            dispatch({ type: actionTypes.REMOVE_PRODUCT, data: e.target.id });
            setErrState("");
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

  useEffect(() => {
    getAllMyProducts();
   
  }, []);
 
  async function getAllMyProducts() {
    try {
      dispatch(getStoreProductsAction())
    } catch (e) {
      console.log(e);
      setErrState("error while sending requast" + e);
    }
  }

  return (
    <div className="  ">
      <div className="">


       
       <ProductList e={products.items} deleteItem={deleteItem} />
       
        {/* {products.items
          ? products.items.map((e) => {
              let imgg = e.img.split("upload");

              return (
                <div className="bc br marginbottom" key={e.id}>
                  <ItemCard e={e} img={imgg} />
                  {" "}
                <div className="flexrow">
                <Link
                    to={{ pathname: "/updateproduct/" + e.id }}
                    state={{ data: e }}
                  >
                    update
                  </Link>{" ---   "}
                  <button title={e} onClick={deleteItem} dan={e.img} id={e.id}>
                    delete
                  </button>
                </div>
                </div>
              );
            })
          : "no items"} */}
      </div>
    </div>
  );
}

export default ProductPage;
