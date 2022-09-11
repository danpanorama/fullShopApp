


function UpdateForm(props) {


  return (
    <div className="flexcenter w100">

<div className="flexcenter w100">
      <div className="form_div w100  ">
        <form
          action=""
          className="form flexcol "
          noValidate
          autoComplete="off"
          onSubmit={props.updateUser.handleSubmit}
        >
        <div className=" ">
        <input
            type="text"
            label="name"
            placeholder='name'
            className="inputuser"
            name="name"
            values={props.updateUser.values.name}
            onChange={props.updateUser.handleChange}
            value={props.updateUser.values.name}

          />
          <input
            type="email"
            label="email*"
            placeholder='email'
            className="inputuser"
            name="email"
            values={props.updateUser.values.email}
            onChange={props.updateUser.handleChange}
            value={props.updateUser.values.email}
          />
        </div>
          <input
            type="password"
            label="password"
            placeholder='pass'
            className="inputuser"
            name="password"

            values={props.updateUser.values.password}
            onChange={props.updateUser.handleChange}
          />
          <input
            type="password"
            label="password"
            placeholder='pass repeat'
            className="inputuser"
            name="passwordreapet"
            
            values={props.updateUser.values.passwordreapet}
            onChange={props.updateUser.handleChange}
          />

          <div className="flexRow">
            remember me
            <input
              type="checkbox"
              name="remember"
              values={props.updateUser.values.remember ? "true" : "false"}
              onChange={props.updateUser.handleChange}
              color="primary"
              inputprops={{ "aria-label": "secondary checkbox" }}
            />
          </div>

          <button className="btnPrimery"  type="submit">send</button>
        </form>
      </div>
    </div>
  
    </div>
  );
}

export default UpdateForm;
