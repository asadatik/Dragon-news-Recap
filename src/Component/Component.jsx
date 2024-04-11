import { Link } from "react-router-dom";


const Component = ({ONews}) => {
     
      const{      title,image_url,details,_id}  = ONews;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {

       details.length>200 ? <p>{details.slice(0,200)}
        <Link to={`/ONews/${_id}`}  className="font-bold text-amber-500 " >   Red More...   </Link>         </p>            
       : <p>{details}</p>   
    }
    
  </div>
</div>
    );
};

export default Component;