import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
   

  const HandleLogin=(e)=>{
       e.preventDefault()
       const from = new FormData(e.currentTarget);
       console.log(from.get('email'))
  }   




    return (
        <div className="mt-10" >
            <Navbar></Navbar>
             
           <div className="mx-auto w-1/2 mt-8 ">
           <h1 className="text-3xl text-center"  >Login here</h1> 
                <form onSubmit={HandleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"  name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
        <h1>Do`t have an Account  <Link to='/register' className="text-lime-600" >Register</Link></h1>
     </div>
        </div>
    );
};

export default Login;