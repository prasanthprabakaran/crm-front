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

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

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
        setErrMsg("Unauthorized");
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

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "20px",
        }}
      >
        <PulseLoader color={"#FFF"} />
      </div>
    );

  const content = (
    <section className="login-screen">
      <main className="login">
        <form className="login-screen-form" onSubmit={handleSubmit}>
          <p ref={errRef} className={errClass} aria-live="assertive">
            {errMsg}
          </p>
          <h3 className="Login-screen-title">Login</h3>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
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
            <label htmlFor="password">Password:{""}</label>
            <input
              className="form__input"
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={password}
              required
            />
            <Link to="/forgotpassword">
              <h6>ForgetPassword?</h6>
            </Link>
          </div>
          <div className="submit-btn">
            <button className="form__submit-button">Sign In</button>
          </div>
          <label htmlFor="persist" className="form__persist">
            <input
              type="checkbox"
              className="form__checkbox"
              id="persist"
              onChange={handleToggle}
              checked={persist}
            />
            Remember me
          </label>{" "}
          <br />
          <Link to="/"><u>Back to Home</u></Link>
        </form>
      </main>
      <footer>
      Credentials:
        <p>Employee:Jona , pwd:Jona1#</p>
        <p>Manger: John, pwd: John1#</p>
      </footer>
    </section>
  );

  return content;
};

export default Login;
