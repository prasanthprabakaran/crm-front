import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../features/auth/authApiSlice";
// import "./ResetPassword.css";

const ResetPassword = () => {
  const [resetPassword, setResetPassword] = useResetPasswordMutation();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (resetPassword !== confirmPassword) {
      resetPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      setSuccess(true);
      setTimeout(() => {
        navigate("/login", { replace: true });
        return setSuccess(false);
      }, 2000);
      resetPassword({ token: params.token });
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <div className="reset-password">
      <form className="reset-password-form" onSubmit={handleSubmit}>
        <h3 className="reset-password-title">Reset Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success ? (
          <span className="success-message">
            Success ! <Link to="/login">Login</Link>
          </span>
        ) : (
          <>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                className="input-box"
                id="password"
                placeholder="Enter new password"
                autoComplete="true"
                value={resetPassword}
                onChange={(e) => setResetPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm New Password:</label>
              <input
                type="password"
                className="input-box"
                id="confirm-password"
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
          </>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
