import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
   import {useLoaderData, useParams} from "react-router-dom"
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const NewsDtls = () => {
    const {id} = useParams();                                 
    const news = useLoaderData();
       console.log(id)      
    console.log(news)
      
    const singleId = news.find( book => book._id == id )
 console.log(singleId);


    return (
        <div>  
            <Header></Header>
            <Navbar></Navbar>
             <h1 className="text-xl font-bold font-poppins "  >Dragon News</h1>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"  >
                  <div className=" lg:col-span-2  p-4 " >
                        <h1>{singleId._id}</h1>
                        <img src={singleId.image_url
} alt="" />
                  </div>
                  <div>
                      <RightSideNav></RightSideNav>      
                  </div>
             </div>
        </div>
    );
};

export default NewsDtls;