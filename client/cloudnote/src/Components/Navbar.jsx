import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
 let history = useHistory();
 const handleLogout = () => {
  localStorage.removeItem("token");
  history.push("/login");
 };
 return (
  <div className=" navbar d-flex" style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'}}>
   <h2 className="container" style={{ color: "black" }}>
    <Link to="/" style={{ color: "black", textDecoration: "none" }}>
     Welcome to Cloudnote!
    </Link>
   </h2>
   {!localStorage.getItem("token") ? (
    <form className="d-flex" style={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'}}>
     <Link
      className="btn btn-primary mx-1"
      to="/login"
      role="button"
      style={{ color: "black", background: "white" }}
     >
      Login
     </Link>
     <Link
      className="btn btn-primary mx-1"
      to="/signup"
      role="button"
      style={{ color: "black", background: "white" }}
     >
      Sign up
     </Link>
    </form>
   ) : (
    <button
     onClick={handleLogout}
     className="btn btn-primary mx-2"
     style={{ color: "black", background: "white" }}
    >
     Logout
    </button>
   )}
  </div>
 );
};

export default Navbar;
