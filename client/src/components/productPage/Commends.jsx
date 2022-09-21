import "../../css/App.css";
import "../../css/store.css";
import GoShop from "../home/GoShop";


function Commends(props) {


 

  return (
    <div className=" ">
      <div className=" commendsections">
        <div className="box_inside  ">
          <div className="flexrow center h100 ">
            <div className="commendsSIde">
              <h2>commends</h2>
              <div className="commendsbox">
                {props.product.commends &&props.product.commends.length > 0? 
                JSON.parse(props.product.commends).map((e,i)=>{
                return(
                <div key={e.id+i} className="commend">
                  
              <div className="padright_commend ">
              {e.id == props.id ? 
                <div><p title={JSON.stringify(e)} onClick={props.remove}>X</p></div>  
               :"" }
              <div className="flexrow commendcurcule"><div className="circule"></div>
                <p className="namecommend">{e.name}</p>
               
                </div>
                <p className="fs10">{e.date}</p>
                  <p className="commendText">{e.text}</p>
              </div>
               
                </div>
                )
                })
              :"no commends"}
              </div>
            
            </div>

            <div className="sideB ">
         <div className="boxsize flexcenter">
        {props.islog.isLog?
        <form   onSubmit={props.addCommend.handleSubmit} action="" className="flexcol">
        <textarea values={props.addCommend.values.text}
        onChange={props.addCommend.handleChange} name="text" id="" cols="30" rows="10"></textarea>
        <button type="submit" >send</button>
      </form>:<GoShop titleText={'you need to log in to commend here'} btn={'go loge in'} /> 
      }
         </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commends;
