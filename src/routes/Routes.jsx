import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDtls from "../pages/NewsDtls/NewsDtls";
import PrivetRoutes from "./PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            {
                  
                path: '/ONews/:id',
                element: <PrivetRoutes><NewsDtls></NewsDtls></PrivetRoutes>,
                loader :   ()=>fetch('/news.json')
            },
            {
                path:"/login",
                element:   <Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>  
            }
        ]
    }    
]);

export default router;