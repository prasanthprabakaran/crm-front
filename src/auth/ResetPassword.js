import {useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './ResetPassword.css';

const ResetPassword = ({match}) => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordUser = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(()=> {
        setError("");
      },5000);
      return setError("Passwords don't match")
    }

    try {
      const { data } = await axios.post(
        `https://crm-client-prasanth.herokuapp.com/api/V2/auth/resetpassword/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <div className="reset-password">
      <form
        onSubmit={resetPasswordUser}
        className="reset-password-form"
      >
        <h3 className="reset-password-title">Reset Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && (
          <span className="success-message">
          {success} <Link to="/login">Login</Link>
          </span>
        )}
        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            className="input-box"
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password:</label>
          <input
            type="password"
            className="input-box"
            id="confirmpassword"
            placeholder="Confirm new password"
            autoComplete="true"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn submit-button">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword