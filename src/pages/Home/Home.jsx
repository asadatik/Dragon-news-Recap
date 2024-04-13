import { useEffect, useState } from "react";
import Component from "../../Component/Component";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {

    const [ books ,setBook] = useState([]);
    useEffect( () =>{
          fetch ('news.json')
          .then(res=>res.json())
  
          .then(data=>setBook(data))

        },[])

          
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 p-10  border">
                   {
                    books.map(  ONews=>  <Component key={ONews.id} ONews={ONews}  ></Component>                   )
                   }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;