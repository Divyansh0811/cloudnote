import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import NoteState from "./Context/notes/noteState";

function App() {
 return (
  <>
   <NoteState>
    <Navbar />
    <div className="container">
     <Home />
    </div>
   </NoteState>
  </>
 );
}

export default App;
