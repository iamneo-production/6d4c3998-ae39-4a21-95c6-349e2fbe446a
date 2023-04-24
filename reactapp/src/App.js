import "./App.css";

import { Route, Routes,Navigate  } from "react-router-dom";

import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";


function App() {



  return (
    <div className="App">
     
    <Routes>
        {/* PUBLIC ROUTE */}
        <Route path="/" element={<Login />} />

        {/* USER ROUTES */}
        <Route path="/user/signup" element={<Signup />} />
        {/* <Route path="/user/applyloan" element={<Customerapplyloan/>}/> */}
        <Route path="/user/login"  element= { <Login/>} />

        {/* ADMIN ROUTES */}

        <Route path="/admin/login"  element= { <Login/>} />


    </Routes>

    </div>
  );
}

 export default App;




// import "./App.css";
// import { Route, Routes,Navigate  } from "react-router-dom";
// import { useEffect,useState } from "react";
// import Home from "./components/Home";
// import Signup from "./components/Auth/Signup/Signup";
// import Login from "./components/Auth/Login/Login";

// function App() {

//   const [userType, setUserType] = useState("");
//   const [authenticated, setAuthenticated] = useState(false);
//   const [token, setToken] = useState("");
  
//   const toggleAuth = () => setAuthenticated(!authenticated);
  
//   useEffect(() => {
//     // Check if the user is authenticated here 
//     // Need to update this by generating a token from backed
//     // const token = localStorage.getItem("token");
//     // if (token) {
//     //   setAuthenticated(true);
//     //   setUserType(localStorage.getItem("userType"));
//     // } else {
//     //   setAuthenticated(false);
//     // }
//     const isAuthenticated = localStorage.getItem("token") !== null;
//     setAuthenticated(isAuthenticated);
//   }, []);
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" 
//             element={authenticated ? <Navigate to="/" /> : <Login />}
              
//             />
//       </Routes>
//     </div>
      
 
//   );
// }

// export default App;
