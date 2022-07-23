import { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordUser = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "https://crm-client-prasanth.herokuapp.com/api/V2/auth/forgotpassword",
        {
          email,
        },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <div className="forgot-password">
      <form
        onSubmit={forgotPasswordUser}
        className="forgot-password-form"
      >
        <h3 className="forgot-password-title">Forgot Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <p className="forgot-password-subtext">
            Please enter the email address you registered your account with. We
            will send you reset password confirmation to this email
          </p>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="input-box"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="submit-btn">
          <button type="submit" className="btn submit-button">
            Send Email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
