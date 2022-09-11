function AddForm(props) {
  return (
    <div className="flexcenter w100 bc br pad10">
      <form
        action=""
        className="form flexcol"
        noValidate
        autoComplete="off"
        onSubmit={props.addItem.handleSubmit}
      >

        <input
         
          type="file"
          name="img"
          multiple
          accept="image/*"
          id="img"
          values={props.addItem.values.img}
          onChange={(e) => {
            props.addItem.setFieldValue("file", e.target.files[0]);
          }}
        /><label htmlFor="cat">product name:</label>

        <input
          type="text"
          label="name"
          placeholder="name"
          className="input"
          name="name"
          values={props.addItem.values.name}
          onChange={props.addItem.handleChange}
        />
        <label htmlFor="cat">description:</label>
        <input
          type="text"
          label="description"
          placeholder="description"
          className="input"
          name="description"
          values={props.addItem.values.description}
          onChange={props.addItem.handleChange}
        />

        <label htmlFor="cat">Choose a category:</label>

        <select
        className="input"
          values={props.addItem.values.cat}
          onChange={props.addItem.handleChange}
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
          values={props.addItem.values.price}
          onChange={props.addItem.handleChange}
        />

        <button  className="btn" type="submit">send</button>
      </form>
    </div>
  );
}

export default AddForm;
