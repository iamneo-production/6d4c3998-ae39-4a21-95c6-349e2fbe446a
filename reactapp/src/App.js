import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";

function App() {
  return (
    <div className="App">
      {/* <nav>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/signup"> signup </Link></li>
          <li><Link to="/login"> login </Link></li>
        </ul>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
