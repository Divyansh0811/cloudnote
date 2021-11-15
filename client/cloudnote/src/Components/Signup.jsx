import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name: "",email: "", password: ""})
  let history = useHistory();
 const handleSubmit = async (e) => {
  e.preventDefault();
  const response = await fetch("https://cloudnote-api.herokuapp.com/api/auth/createuser", {
   method: 'POST',
   headers: {
    "content-type": "application/json",
   },
   body: JSON.stringify({name: credentials.name,email: credentials.email, password: credentials.password})
  });
  const res = await response.json();
  console.log(res);
    if(res.success){

      localStorage.setItem('token', res.authToken) // storing auth into localstorage
      history.push("/")  // redirecting user to the home page
      props.showAlert("Account created successfully!", "success")
    }else{
      props.showAlert("Invalid Credentials!", "Error")
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
      Username
     </label>
     <input
      type="text"
      className="form-control"
      onChange={onChange}
      value={credentials.name}
      id="name"
      name="name"
      aria-describedby="textHelp"
      minLength={3}
      required
     />
    </div>
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

      required
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
      minLength={5}
      required
     />
    </div>

    <button type="submit" className="btn btn-primary" style={{color:"black", background:"white"}}>
     Submit
    </button>
   </form>
  </div>
 );
};

export default Signup
