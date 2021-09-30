import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NoteState from "./Context/notes/noteState";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
function App() {
 return (
  <>
   <NoteState>
    <Router>
     <Navbar />
     <div className="container">
      <Switch>
       <Route exact path="/">
        <Home />
       </Route>
       <Route exact path="/login">
        <Login />
       </Route>
       <Route exact path="/signup">
        <Signup />
       </Route>
      </Switch>
     </div>
    </Router>
   </NoteState>
  </>
 );
}

export default App;
