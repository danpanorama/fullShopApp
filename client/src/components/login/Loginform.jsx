import '../../css/App.css';
import '../../css/login.css';



function Loginform(props) {
  return (
    <div className="Login">

<div className="loginbox">
<form
          action=""
          className="form flexcol"
          noValidate
          
          autoComplete="off"
          onSubmit={props.login.handleSubmit}
        >
          <input
            type="text"
            label="name"
            placeholder='name'
            name="name"
            className='inputuser'
            values={props.login.values.name}
            onChange={props.login.handleChange}
          />
      
          <input
            type="password"
            label="password"
            name="password"
            className='inputuser'
            placeholder='pass'
            values={props.login.values.password}
            onChange={props.login.handleChange}
          />
      

          <div className="flexRow">
            remember me
            <input
              type="checkbox"
              name="remember"
              values={props.login.values.remember ? "true" : "false"}
              onChange={props.login.handleChange}
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

export default Loginform;
