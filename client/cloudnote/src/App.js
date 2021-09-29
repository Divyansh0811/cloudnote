import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NoteState from "./Context/notes/noteState";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
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
        <Home />
       </Route>
       <Route exact path="/signup">
        <Home />
       </Route>
      </Switch>
     </div>
    </Router>
   </NoteState>
  </>
 );
}

export default App;
