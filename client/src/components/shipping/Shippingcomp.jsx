import "../../css/App.css";
import "../../css/cart.css";

function Shippingcomp(props) {
  return (
    <div className=" flexcenter w100 ">
      <h1>shipping </h1>

      <form
        action=""
        onSubmit={props.shipping.handleSubmit}
        className=" formshipping flexcol boxshadow"
      >
        <input
          type="text"
          values={props.shipping.values.country}
          onChange={props.shipping.handleChange}
          value={props.shipping.values.country}
          name="country"
          className="inputuser inputshipping"
          placeholder="country"
        />

        <input
          type="text"
          value={props.shipping.values.street}
          values={props.shipping.values.street}
          onChange={props.shipping.handleChange}
          name="street"
          className="inputuser inputshipping"
          placeholder="street"
        />

        <input
          type="text"
          values={props.shipping.values.state}
          value={props.shipping.values.state}
          onChange={props.shipping.handleChange}
          name="state"
          className="inputuser inputshipping"
          placeholder="state"
        />

        <input
          type="text"
          values={props.shipping.values.address}
          onChange={props.shipping.handleChange}
          value={props.shipping.values.address}
          name="address"
          className="inputuser inputshipping"
          placeholder="address"
        />

        <input
          type="text"
          values={props.shipping.values.address2}
          onChange={props.shipping.handleChange}
          value={props.shipping.values.address2}
          name="address2"
          className="inputuser inputshipping"
          placeholder="address 2"
        />
        <input
          type="number"
          values={props.shipping.values.phon}
          value={props.shipping.values.phon}
          onChange={props.shipping.handleChange}
          name="phon"
          

          className="inputuser inputshipping"
          placeholder="phon"
        />

        <input
          type="text"
          name="zipcode"
          values={props.shipping.values.zipcode}
          value={props.shipping.values.zipcode}
          onChange={props.shipping.handleChange}
          className="inputuser inputshipping"
          placeholder="zip code"
        />

        <button type="submit" className="btnPrimery">
          continiue
        </button>
      </form>
    </div>
  );
}

export default Shippingcomp;
