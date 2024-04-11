import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null) ;
const auth = getAuth(app);

const AuthProvider = ({children}) => {
         
            const [user,setuser] = useState(null);  
            const [loading, setLoading] = useState(false);
// //////////////////////////////////
       
             const Creatuser = (email,passowrd)=>{
              setLoading(true)
             return createUserWithEmailAndPassword(auth,email,passowrd);
            }  
  // //////////////////////////
          const login =(email,passowrd)=>{
            setLoading(true)
                  return signInWithEmailAndPassword( auth,email,passowrd  )
          }

// //////////////////////////////////
       const LogOut = ()=>{
        setLoading(true)
        return   signOut(auth)
       }
// //////////////////////////////
            
       useEffect( ()=>{
        const Unsubscribe = onAuthStateChanged(auth, (Cuuretuser) => {
               setuser(Cuuretuser)
          });
         return ()=>{
              Unsubscribe()
         } 
       },
        [] )         
           
    const AuthInfo = {
        user,
        loading,
        Creatuser,
        login,
        LogOut
    };
     
    return (
      <AuthContext.Provider value={AuthInfo}  >
          
          {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;