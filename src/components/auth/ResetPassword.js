import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { useResetPasswordMutation } from "../../features/auth/authApiSlice";
// import "./ResetPassword.css";
import { resetPasswordFields } from "../../config/formFields";
import Input from "./Input"

const fields = resetPasswordFields;
const fieldState = {};

fields.forEach((field) => {
  fieldState[fields.id] = '';
  return fieldState[field.id];
});

const ResetPassword = () => {

  const [resetPassword, { isLoading, isError }] = useResetPasswordMutation();
  const [success, setSuccess] = useState(false);
  const params = useParams();
  const [passwordState, setPasswordState] = useState(fieldState);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setPasswordState({
      ...passwordState,
      [e.target.id]: e.target.value,
    });

  const handleResetPassword = () => {
    resetPassword({ passwordState, token: params.token });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isError) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/login", { replace: true });
        return setSuccess(false);
      }, 3000);
    }
    handleResetPassword();
  };

  return (
    <div className="reset-password">
      {isLoading ? (
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
      ) : (
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <h3 className="reset-password-title">Reset Password</h3>
          {success ? (
            <span className="success-message">
              Success ! <Link to="/login">Login</Link>
            </span>
          ) : (
            <>
              {fields.map((field) => (
              <Input
              key={field.id}
              type={field.type}
              className={field.className}
              id={field.id}
              placeholder={field.placeholder}
              autoComplete={field.autoComplete}
              handleChange={handleChange}
              value={passwordState[field.id]}
              required={field.required}
              labelText={field.labelText}
              htmlFor={field.htmlFor}
                />
              ))}  
              <div className="submit-btn">
                <button type="submit" className="btn submit-button" onSubmit={handleSubmit}>
                  Reset Password
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
