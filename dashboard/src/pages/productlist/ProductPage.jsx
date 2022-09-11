import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actionTypes from "../../store/Actions";
import axiosConfig from "../../config/AxiosConfig";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../../components/ItemCard";

function ProductPage() {
  const [errState, setErrState] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const store = useSelector((state) => state.item);

  async function deleteItem(e) {
    try {
      await axiosConfig
        .post("/product/items/del", {
          id: e.target.id,
          path: e.target.getAttribute("dan"),
          isStore: true,
          productStoreId: e.target.title,
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
      await axiosConfig
        .get("/product/items/getall")
        .then((res) => {
          if (res.data.err) {
            return setErrState(res.data.err);
          } else {
            console.log(res.data);

            dispatch({ type: actionTypes.SET_STORE_PRODUCTS, data: res.data });
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

  return (
    <div className="  ">
      <div className="">
        {store.item
          ? store.item.map((e) => {
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
          : "no items"}
      </div>
    </div>
  );
}

export default ProductPage;
