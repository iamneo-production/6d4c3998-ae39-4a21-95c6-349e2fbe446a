import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import { UserProvider } from "./context/UserContext";
import UserSharedLayout from "./sharedlayout/UserSharedLayout";
import AdminSharedlayout from "../src/sharedlayout/AdminSharedLayout";
import { JwtTokenProvider } from "./context/TokenContext";

function App() {

  return (
    <JwtTokenProvider>


      <UserProvider>
        <div className="App">
          <ToastContainer />
          <Routes>
            {/* PUBLIC ROUTE */}
            <Route path="/" element={<Login />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path="/admin/login" element={<Login />} />

            {/* USER ROUTES */}

            <Route path="/user/home" element={<UserSharedLayout />}>
              <Route index element={<ApplyForm />} />
              <Route path="loanstatus" element={<LoanStatus />} />
              <Route path="profile" element={<Profile />} />

            </Route>


            {/* ADMIN ROUTES */}

            <Route path="/admin/home" element={<AdminSharedlayout />}>
              <Route index element={<AdminHomePage />} />
              <Route path="approvalform" element={<ApprovalForm />} />
            </Route>
          </Routes>
        </div>

      </UserProvider>
    </JwtTokenProvider>
  );
}

export default App;
