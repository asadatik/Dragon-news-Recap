import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null) ;


const AuthProvider = ({children}) => {

            const [user,setuser] = useState(null);  
            console.log(user);
            const [loading, setLoading] = useState(false);
// //////////////////////////////////
       
             const Creatuser = (email,passowrd)=>{
              setLoading(true)
             return createUserWithEmailAndPassword(   auth,email,passowrd);
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
        // Social provider 
        const GoogleProvider = new GoogleAuthProvider();    

   const googleLogin=()=>{
   return signInWithPopup(auth,GoogleProvider)
   }


// ////////////////////////////
// observeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            
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
        LogOut,
        googleLogin
    };
     
    return (
      <AuthContext.Provider value={AuthInfo}  >
          
          {children}

      </AuthContext.Provider>
    );
};

export default AuthProvider;