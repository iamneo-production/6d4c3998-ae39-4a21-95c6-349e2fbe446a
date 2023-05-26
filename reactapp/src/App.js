import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Auth/Login/Login";
import Signup from "./components/Auth/Signup/Signup";
import { UserProvider } from "./context/UserContext";
import UserSharedLayout from "./sharedlayout/UserSharedLayout";
import AdminSharedLayout from "../src/sharedlayout/AdminSharedLayout";
import { JwtTokenProvider } from "./context/TokenContext";
import Profile from "./components/Customer/Profile/Profile";
import ApplyForm from "./components/Customer/ApplyForm/ApplyForm";
import LoanStatus from "./components/Customer/LoanStatus/LoanStatus";
import EditLoan from "./components/Admin/ApprovalForm/EditLoan";
import DeleteLoan from "./components/Admin/ApprovalForm/DeleteLoan";
import RepaymentSchedule from "./components/Admin/ApprovedForm/RepaymentSchedule/RepaymentSchedule";
import AdminHomePage from "./components/Admin/AdminHomePage/AdminHomePage";
import ApprovalForm from "./components/Admin/ApprovalForm/ApprovalForm";
import ApprovedForm from "./components/Admin/ApprovedForm/ApprovedForm";
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

            <Route path="/admin/home" element={<AdminSharedLayout />}>
              <Route index element={<AdminHomePage />} />
            </Route>

            <Route path="/admin/getAllLoans" element={<ApprovalForm />}></Route>
            <Route path="/admin/LoanDetails" element={<ApprovedForm />}></Route>
            <Route path="/admin/editStudent/:id" element={<EditLoan />} />
            <Route path="/admin/deleteStudent/:id" element={<DeleteLoan />} />
            <Route
              path="/admin/generateSchedule"
              element={<RepaymentSchedule />} />
          </Routes>
        </div>
      </UserProvider>
    </JwtTokenProvider>
  );
}

export default App;
