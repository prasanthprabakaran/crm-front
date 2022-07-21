import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(()=>{
    if (localStorage.getItem('authToken')) {
        history.push('/');
    }
  },[history]);

  const loginUser = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-Type": "application/json",
      },
    };

    try {
      const { data } = await fetch.post(
        "https://crm-client-prasanth.herokuapp.com/api/V2/auth/login",
        {
          email,
          password,
        },
        config
      );

      localStorage.setItem("authToken", data.token);
      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <div className="login-screen">
      <form onSubmit={loginUser} className="login-screen-form">
        <h3 className="login-screen-title">Login</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="input-box"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:{''}
            <Link to='/forgotpassword' className="login-screen-forgot-password">
                ForgotPassword?
            </Link>
            </label>
          <input
            type="password"
            className="input-box"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            tabIndex={2}
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn submit-button">
            Login
          </button>
        </div>

        <span className="login-screen-link">
          Don't have an account?
          <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;

