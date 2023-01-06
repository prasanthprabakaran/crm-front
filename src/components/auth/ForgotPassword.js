import { useState } from "react";
import { useForgetPasswordMutation } from "../../features/auth/authApiSlice";
import "./ForgotPassword.css";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const [forgetPassword, setForgetPassword] = useForgetPasswordMutation();

  const sendEmail = (e) => {
    e.preventDefault();
    try {
      forgetPassword({email:email});
    if (!setForgetPassword.isError) {
      setEmailSent(true);
    }
    } catch (error) {
      console.log(error);
    }

    
  };

  return (
    <div className="forgot-password">
      <form onSubmit={sendEmail} className="forgot-password-form">
        {emailSent && <p style={{ color:"black"}}>Email Sent !</p>}
            <h3 className="forgot-password-title">Forgot Password</h3>
            <div className="form-group">
              <p className="forgot-password-subtext">
                Please enter the email address you registered your account with.
                We will send you reset password confirmation to this email
              </p>
              <label htmlFor="email"> Email:</label>
              <input
                type="email"
                className="input-box"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </div>
            <div className="submit-btn">
              <button type="submit" className="btn submit-button">
                sendEmail
              </button>
            </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
