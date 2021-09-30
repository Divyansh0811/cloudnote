import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 return (
  <div className=" navbar d-flex" style={{ textAlign: "center" }}>
   <h2  className="container" style={{ color: "black" }}>
   <Link   to="/" style={{color: "black", textDecoration: "none"}} >
     Welcome to Cloudnote!
    </Link>
   </h2>
   <form className="d-flex">
    <Link style={{ color: "black", background: "white" }} className="btn btn-primary mx-1" to="/login" role="button">
     Login
    </Link>
    <Link style={{ color: "black", background: "white" }} className="btn btn-primary mx-1" to="/signup" role="button">
     Signup
    </Link>
   </form>
  </div>
 );
};

export default Navbar;
