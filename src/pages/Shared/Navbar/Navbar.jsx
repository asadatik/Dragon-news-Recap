import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const{user,LogOut} = useContext(AuthContext);
 console.log(user)   
    const  signOut =() =>{
        LogOut()
        .then()
        .catch()

    }
             
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
        <li><NavLink to="/Login">Login</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
           
            <div className="navbar-end">
                  {
                  user&& <p>{user.email}</p>  
                  }
                  {
                    user ?  <div className="tooltip tooltip-bottom " data-tip={user.displayName?user.displayName:'rtrtrtr'}>
                   <button>    { user.photoURL?<img className="w-10  rounded-full  " src={user.photoURL} 
                alt="" /> :  <img className="w-10 rounded-full "   src="https://i.ibb.co/fNwwgLr/christoph-nolte-hf2-Jc-GFgypg-unsplash.jpg" alt="" />   }  </button>
                            </div> 
                     :
                  
                   <label  tabIndex={0} className="btn tooltip  btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                    </div>
                  </label>}
                {
                    user ? <button onClick={signOut}  className="btn">Sign Out</button> 
                    :
                    <Link>
                        <button className="btn">Sign In</button>
                    </Link>
                }
               
            </div>
        </div>
    );
};

export default Navbar;