import "../../css/App.css";
import "../../css/store.css";



function Pagination(props) {
    const pagenum = []

   
    for(let i = 1 ; i <= Math.ceil(props.totalProducts / props.arrayPerPage); i++){
        pagenum.push(i)
       
    }
 

  return (
    <div className=" padding">
        <div className="arraynum flexrow">
            {pagenum.map(num => (
                <div key={num} className="f">
                    <p onClick={()=> props.paginate(num)} className="pagelink">
                        {num}
                    </p>
                </div>
            ))}
        </div>

    </div>
  );
}

export default Pagination;
