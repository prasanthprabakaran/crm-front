import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import Register from "./screens/Register";
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import Private from './screens/Private';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Private/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/resetpassword/:resetToken" element={<ResetPassword/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
