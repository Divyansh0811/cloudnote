import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";

function App() {
 return (
  <Router>
   <Navbar />
   <Switch>
    <Route exact path="/">
     <Home />
    </Route>
    <Route path="/register"><Register /></Route>
    <Route path="/login"><Login /></Route>
   </Switch>
  </Router>
 );
}

export default App;
