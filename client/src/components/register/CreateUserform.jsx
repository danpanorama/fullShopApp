import "../../css/App.css";

function CreateUserform(props) {
  return (
    <div className="flexcenter w100">
      <div className="form_div w100  ">
        <form
          action=""
          className="form flexcol"
          noValidate
          autoComplete="off"
          onSubmit={props.createUser.handleSubmit}
        >
          <input
            type="text"
            label="name"
            placeholder='name'
            className="inputuser"
            name="name"
            values={props.createUser.values.name}
            onChange={props.createUser.handleChange}
          />
          <input
            type="email"
            label="email*"
            placeholder='email'
            className="inputuser"
            name="email"
            values={props.createUser.values.email}
            onChange={props.createUser.handleChange}
          />
          <input
            type="password"
            label="password"
            placeholder='pass'
            className="inputuser"
            name="password"
            values={props.createUser.values.password}
            onChange={props.createUser.handleChange}
          />
          <input
            type="password"
            label="password"
            placeholder='pass repeat'
            className="inputuser"
            name="passwordreapet"
            values={props.createUser.values.passwordreapet}
            onChange={props.createUser.handleChange}
          />

          <div className="flexRow">
            remember me
            <input
              type="checkbox"
              name="remember"
              values={props.createUser.values.remember ? "true" : "false"}
              onChange={props.createUser.handleChange}
              color="primary"
              inputprops={{ "aria-label": "secondary checkbox" }}
            />
          </div>

          <button className="btnPrimery"  type="submit">send</button>
        </form>
      </div>
    </div>
  );
}

export default CreateUserform;
