import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({email: "", password: ""})
  let history = useHistory();
 const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch("http://localhost:5000/api/auth/login", {
   method: 'POST',
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify({email: credentials.email, password: credentials.password})
  });
  const res = await response.json();
  console.log(res);
  if(res.success){
    //save the auth token and redirect to home page
    localStorage.setItem('token', res.authToken)
    history.push("/")
  }else{
    //show alert with wrong credentials
  }
 };
 const onChange  = (e) => {
   setCredentials({...credentials, [e.target.name]: e.target.value})
 }
 return (
  <div>
   <form onSubmit={handleSubmit}>
    <div className="mb-3">
     <label htmlFor="email" className="form-label">
      Email address
     </label>
     <input
      type="email"
      className="form-control"
      onChange={onChange}
      value={credentials.email}
      id="email"
      name="email"
      aria-describedby="emailHelp"
     />
     <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
     </div>
    </div>
    <div className="mb-3">
     <label htmlFor="password" className="form-label">
      Password
     </label>
     <input
      type="password"
      className="form-control"
      onChange={onChange}
      value={credentials.password}
      name="password"
      id="password"
     />
    </div>

    <button type="submit" className="btn btn-primary">
     Submit
    </button>
   </form>
  </div>
 );
};

export default Login;
