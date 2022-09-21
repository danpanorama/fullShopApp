import "../css/App.css";
import "../css/home.css";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="flexcenter w100">
      <div className="flexcenter w100">
        <div className="containert">
          <h1 className="primery_header">daniel project</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
