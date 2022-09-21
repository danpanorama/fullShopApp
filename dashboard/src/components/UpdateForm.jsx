function UpdateForm(props) {
    return (
      <div className="flexcenter w100 bc br pad10">
        <form
          action=""
          className="form flexcol"
          noValidate
          autoComplete="off"
          onSubmit={props.updateItem.handleSubmit}
        >
  
          <input
           
            type="file"
            name="img"
            multiple
            accept="image/*"
            id="img"
            values={props.updateItem.values.img}
         
            

            onChange={(e) => {
              props.updateItem.setFieldValue("file", e.target.files[0]);
            }}
          /><label htmlFor="cat">product name:</label>
  
          <input
            type="text"
            label="name"
            placeholder="name"
            className="input"
            name="name"
        
            values={props.updateItem.values.name}
            value={props.updateItem.values.name||"hay you"}

            onChange={props.updateItem.handleChange}
          />
          <label htmlFor="cat">description:</label>
          <input
            type="text"
            label="description"
            placeholder="description"
            className="input"
            name="description"
            values={props.updateItem.values.description}
            value={props.updateItem.values.description}

            onChange={props.updateItem.handleChange}
          />
  
          <label htmlFor="cat">Choose a category:</label>
  
          <select
          className="input"
            values={props.updateItem.values.cat}
            value={props.updateItem.values.cat}

            onChange={props.updateItem.handleChange}
            name="cat"
            id="cat"
          >
            <option value="cloths">cloths</option>
            <option value="food">food</option>
            <option value="sport">sport</option>
            <option value="audi">audi</option>
          </select>
          <label htmlFor="cat">price $:</label>
          <input
            type="number"
            label="price"
            placeholder="price"
            className="input"
            name="price"
            values={props.updateItem.values.price}
            value={props.updateItem.values.price}

            onChange={props.updateItem.handleChange}
          />
  
          <button  className="btn" type="submit">send</button>
        </form>
        {props.updateItem.values.id}
      </div>
    );
  }
  
  export default UpdateForm;
  