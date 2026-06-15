import "./Login.css";
import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import usePersist from "../../hooks/usePersist";
import { PulseLoader } from "react-spinners";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => { userRef.current.focus(); }, []);
  useEffect(() => { setErrMsg(""); }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/dash");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Invalid credentials");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist((prev) => !prev);

  const errClass = errMsg ? "errmsg" : "offscreen";

  if (isLoading) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "100vh", gap: "1rem" }}>
      <PulseLoader color={"#6366F1"} />
      <span style={{ color: "#64748B", fontSize: "0.9rem" }}>Authenticating...</span>
    </div>
  );

  return (
    <section className="login-screen">
      <div className="login-card">
        <div className="login-card__header">
          <div className="login-card__logo">C</div>
          <h2 className="login-card__title">Welcome back</h2>
          <p className="login-card__subtitle">Sign in to your CRM account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <p ref={errRef} className={errClass} aria-live="assertive">
            {errMsg}
          </p>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form__input"
              type="text"
              id="username"
              ref={userRef}
              value={username}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              className="form__input"
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={password}
              required
            />
            <Link to="/forgotpassword" className="forgot-link">
              Forgot password?
            </Link>
          </div>

          <button className="form__submit-button" type="submit">
            Sign In
          </button>

          <label htmlFor="persist" className="form__persist">
            <input
              type="checkbox"
              className="form__checkbox"
              id="persist"
              onChange={handleToggle}
              checked={persist}
            />
            Keep me signed in
          </label>
        </form>

        <div className="login-card__footer">
          <p className="login-card__back">
            <Link to="/">← Back to Home</Link>
          </p>
        </div>
      </div>

      <div className="login-credentials">
        <p className="login-credentials__title">Demo Credentials</p>
        <p className="login-credentials__item">Employee: <code>Jona</code> / <code>Jona1#</code></p>
        <p className="login-credentials__item">Manager: <code>John</code> / <code>John1#</code></p>
      </div>
    </section>
  );
};

export default Login;