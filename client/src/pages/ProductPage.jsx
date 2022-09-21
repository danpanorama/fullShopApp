import "../css/App.css";
import "../css/profile.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actionTypes from "../store/Actions";
import { useEffect, useState } from "react";
import ProductPagecomp from "../components/productPage/ProductPagecomp";
import Commends from "../components/productPage/Commends";
import { useFormik } from "formik";
import axiosConfig from "../config/AxiosConfig";
import { removeComment, addComment, singleProductPage } from "../Redux/Actions/productsAction";
import { errorAction, goodMessage, messageAction } from "../Redux/Actions/errAction";
import { addItem } from "../Redux/Actions/cartAction";

function ProductPage(props) {
  const [amountState, setAmount] = useState(1);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users);
  const product = useSelector((state) => state.products);

  const [errState, setErrState] = useState("");
  const [productState, SetProducte] = useState({});
  let location = useLocation();

  function increamNum() {
    setAmount(amountState + 1);
    dispatch(messageAction({type:'good',msg:"plus one always fun"}))

  }
 
  function decreamNum() {
    if (amountState > 1) {
      setAmount(amountState - 1);
      dispatch(messageAction({type:'good',msg:"minus one pretty sucks for a guy like you"}))

    }
  }

  useEffect(() => {
    // SetProducte(location.state.data);
   
    dispatch(singleProductPage(location.state.data));
  }, [dispatch,location.state.data]);

  async function likeProduct(e) {
    try {
      await axiosConfig
        .post("/users/like", {
          user: user.user,
          id: e.target.id,
          rating: e.target.value,
        })
        .then((res) => {
          productState.likes = res.data.review;
          dispatch({
            type: actionTypes.GOOD_MESSAGE,
            data: "thank you for your review",
          });
        })
        .catch((err) => {
          setErrState(err.err);
          dispatch({ type: actionTypes.BAD_MESSAGE, data: err.err });
        });
    } catch (e) {
      console.log(e);
      setErrState("error while sending requast" + e);
      dispatch(errorAction(e.message));
    }
  }

  async function removecommend(e) {
    try {
      let data = JSON.parse(e.target.title);
      data.itemId = location.state.data.id;
      // let json = JSON.parse(productState.commends);
      // function filter(e) {
      //   return e.id != data.id && e.text != data.text;
      // }

      // let arr = json.filter(filter);
      // let string = JSON.stringify(arr);
      // productState.commends = string;
      dispatch(removeComment(data));
      dispatch(messageAction({type:'good',msg:"you remove a comment"}))

    } catch (e) {
      setErrState("error while sending requast" + e);
      dispatch(errorAction(e.message));
    }
  }

  const addCommend = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: async (values) => {
      try {

        values.name = user.user.name;
        values.id = user.user.id;
        values.itemId = location.state.data.id;
        dispatch(addComment(values));
        dispatch(messageAction({type:'good',msg:"you add a comment"}))


      } catch (e) {
        console.log(e);
        setErrState("error while sending requast" + e);
        dispatch(errorAction(e));
      }
    },
  });

  function addToCard(e) {
    dispatch(addItem({ data: location.state.data, amount: amountState }));
    dispatch(messageAction({type:'good',msg:"add to your cart"}))

  }

  return (
    <div className="paddpage">
      <ProductPagecomp
        likeProduct={likeProduct}
        islog={user.isLog}
        amountState={amountState}
        product={product.singleItem}
        decreamNum={decreamNum}
        increamNum={increamNum}
        addToCard={addToCard}
      />
      <Commends
        remove={removecommend}
        islog={user}
        id={user.user.id}
        addCommend={addCommend}
        product={product.singleItem}
      />
    </div>
  );
}

export default ProductPage;
