import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import {Navigate,useLocation} from 'react-router-dom'

const PrivetRoutes = ({children}) => {
    
    const location =  useLocation();
    console.log(location.pathname);
  const {user,loading} = useContext(AuthContext);
  console.log(user)

     if(user)   {
        return children 
     }
  
    return <Navigate state={location.pathname}  to='/login' >    </Navigate>
};

export default PrivetRoutes;