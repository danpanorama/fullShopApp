
import Prevewe from '../../components/profile/Prevewe'
import { useRef } from "react";

function AddNewItem(props) {
  const fileref = useRef(null);


    return (
      <div className="flexcenter w100">
  
  <div className="flexrowcenter">
      <div className="form_div  ">
        <form
          action=""
          className="form flexcol"
          noValidate
          autoComplete="off"
          onSubmit={props.addItem.handleSubmit}
        >
  {/* <input
            type="text"
            label="img"
            placeholder='img'
            className="inputuser"
            name="img"
            values={props.addItem.values.img}
            onChange={props.addItem.handleChange}
          /> */}

<input
              ref={fileref}
              type="file"
              name="img"
              multiple
              accept="image/*"
              id="img"
              values={props.addItem.values.img}
              onChange={(e) => {
                props.addItem.setFieldValue("file", e.target.files[0]);
              }}
            />

          <input
            type="text"
            label="name"
            placeholder='name'
            className="inputuser"
            name="name"
            values={props.addItem.values.name}
            onChange={props.addItem.handleChange}
          />
            <input
            type="text"
            label="description"
            placeholder='description'
            className="inputuser"
            name="description"
            values={props.addItem.values.description}
            onChange={props.addItem.handleChange}
          />


          <label for="cars">Choose a car:</label>

<select values={props.addItem.values.cat}
            onChange={props.addItem.handleChange} 
            name="cat" id="cat">

  <option value="cloths">cloths</option>
  <option value="food">food</option>
  <option value="sport">sport</option>
  <option value="audi">audi</option>
</select>
          
          <input
            type="number"
            label="price"
            placeholder='price'
            className="inputuser"
            name="price"
            values={props.addItem.values.price}
            onChange={props.addItem.handleChange}
          />
       

       

          <button type="submit">send</button>
        </form>

        <div className="respond">
          
          </div>
      </div>
      {props.addItem.values.file ? (
              <Prevewe file={props.addItem.values.file} />
            ) : (
              ""
            )}
    </div>
    
      </div>
    );
  }
  
  export default AddNewItem;
  