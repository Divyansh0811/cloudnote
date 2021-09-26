import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register/Register";

function App() {
 return (
  <div className="App">
   <Navbar />
   <Home />
   <Login />
   <Register />
  </div>
 );
}

export default App;
