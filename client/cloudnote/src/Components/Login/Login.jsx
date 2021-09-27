import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
 return (
  <div className="login">
   <span className="login-title">Login</span>
   <form className="login-form">
    <label>Email</label>
    <input
     className="login-input"
     type="email"
     placeholder="Enter your email.."
    />
    <label>Password</label>
    <input
     className="login-input"
     type="password"
     placeholder="Enter your password.."
    />
    <button className="login1-button" type="submit">
     Login
    </button>
   </form>
   <Link to="/register">
    <button className="register-button">Register</button>
   </Link>
  </div>
 );
}

export default Login;
