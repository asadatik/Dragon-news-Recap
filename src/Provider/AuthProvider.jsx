import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null) ;
const auth = getAuth(app);

const AuthProvider = ({children}) => {
         
            const [user,setuser] = useState(null);
           
             const Creatuser = (email,passowrd)=>{
             return createUserWithEmailAndPassword(auth,email,passowrd);
            }  
            
       useEffect( ()=>{
        const Unsubscribe =  onAuthStateChanged(auth, (Cuuretuser) => {
               setuser(Cuuretuser)
          });
         return ()=>{
              Unsubscribe()
         } 
       },
        [] )         
           
    const AuthInfo = {
        user,
        Creatuser
    };
     
    return (
      <AuthContext.Provider value={AuthInfo}  >
          
          {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;