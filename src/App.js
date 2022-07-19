import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/sign_up" element={<Signup/>} />
          <Route path="/forget_password" element={<ForgetPassword/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
