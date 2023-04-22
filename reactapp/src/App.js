import "./App.css";

import { Route, Routes  } from "react-router-dom";

import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import Customerapplyloan from "./components/Customer/Customerapplyloan/Customerapplyloan";
import Home from "./components/Admin/Home";

function App() {


  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
        {/* PUBLIC ROUTE */}

        <Route path="/" element={<Login  />} />

        {/* USER ROUTES */}

        <Route path="/user/signup" element={<Signup />} />
        <Route path="/user/home"  element={<Customerapplyloan/>}/>
        
        <Route path="/user/login"  element= { <Login/>} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/home" element={<Home/>} />
        <Route path="/admin/login"  element= { <Login/>} />


     </Routes>
     </BrowserRouter>
    </div>
  );
}

 export default App;

