import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './auth/Login';
import Register from "./auth/Register";
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Home from "./pages/Home";
import PrivateRoute from "./components/routing/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<PrivateRoute/>}>
            <Route exact path="/" element={<Home />} />
          </Route>
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
          <Route exact path="/resetpassword/:resetToken" element={<ResetPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
