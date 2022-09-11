import { useState } from "react";
import { useFormik } from "formik";
import axiosConfig from "../../config/AxiosConfig";
import AddForm from "../../components/AddForm";
import {useSelector,useDispatch} from "react-redux";
import * as actionTypes from '../../store/Actions'

function Profile() {
  const [errState, setErrState] = useState("");
  const dispatch = useDispatch()

  const addItem = useFormik({
    initialValues: {
      img: "",
      name: "",
      cat: "",
      description: "",
      price: "",
      storeId: 1,
    },
    onSubmit: async (values) => {
      try {
        let dataForm = new FormData();
        if (values.file) {
          dataForm.append("file", values.file, values.file.name);
        }
        let k = JSON.stringify(values);
        dataForm.append("user", k);
        await axiosConfig
          .post("product/items/add", dataForm)
          .then((res) => {
            if (res.data.err) {
              return setErrState(res.data.err);
            } else {
              dispatch({type:actionTypes.ADD_ITEM,data:res.data})
              setErrState("all good");
            }
          })
          .catch((err) => {
            setErrState(err.err);
          });
      } catch (e) {
        console.log(e);
        setErrState("error while sending requast" + e);
      }
    },
  });

  return (
    <div className="containert  profile">
      <AddForm addItem={addItem} />
      {errState}

      {/* <AddNewItem addItem={addItem} /> */}
    </div>
  );
}

export default Profile;
