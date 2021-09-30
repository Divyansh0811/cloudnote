import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory()
  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push("/login")
  }
 return (
  <div className=" navbar d-flex" style={{ textAlign: "center" }}>
   <h2 className="container" style={{ color: "black" }}>
    <Link to="/" style={{ color: "black", textDecoration: "none" }}>
     Welcome to Cloudnote!
    </Link>
   </h2>
   {!localStorage.getItem('token') ? 
    <form className="d-flex">
     <Link
      style={{ color: "black", background: "white" }}
      className="btn btn-primary mx-1"
      to="/login"
      role="button"
     >
      Login
     </Link>
     <Link
      style={{ color: "black", background: "white" }}
      className="btn btn-primary mx-1"
      to="/signup"
      role="button"
     >
      Signup
     </Link>
    </form>
    :
    <button className="btn btn-primary mx-1" onClick={handleLogout} style={{color:"black", background:"white"}}> Logout</button>
    }
  </div>
 );
};

export default Navbar;
