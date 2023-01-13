import {useState} from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { useResetPasswordMutation } from "../../features/auth/authApiSlice";
// import './ResetPassword.css';

const ResetPassword = ({match}) => {

  const [resetPassword, { isLoading, isError}] = useResetPasswordMutation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const params = useParams();

  const resetPasswordUser = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(()=> {
        setError("");
      },5000);
      return setError("Passwords don't match")
    }

    try {
      // const { data } = await axios.put(
      //   `http://localhost:3002/auth/resetpassword/${params.resetToken}`,
      //   {
      //     password,
      //   },
      //   config
      // );
      resetPassword({ password: params.token})
      setSuccess(true);
      Navigate("/");
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









// import { useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { PulseLoader } from "react-spinners";
// import { useResetPasswordMutation } from "../../features/auth/authApiSlice";
// // import "./ResetPassword.css";
// import { resetPasswordFields } from "../../config/formFields";
// import Input from "./Input"

// const fields = resetPasswordFields;
// const fieldState = {};

// fields.forEach((field) => {
//   fieldState[fields.id] = '';
//   return fieldState[field.id];
// });

// const ResetPassword = () => {

//   const [resetPassword, { isLoading, isError }] = useResetPasswordMutation();
//   const [success, setSuccess] = useState(false);
//   const params = useParams();
//   const [passwordState, setPasswordState] = useState(fieldState);
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setPasswordState({
//       ...passwordState,
//       [e.target.id]: e.target.value,
//     });

//   const handleResetPassword = () => {
//     resetPassword({ passwordState, token: params.token });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isError) {
//       setSuccess(true);
//       setTimeout(() => {
//         navigate("/login", { replace: true });
//         return setSuccess(false);
//       }, 3000);
//     }
//     handleResetPassword();
//   };

//   return (
//     <div className="reset-password">
//       {isLoading ? (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             flexDirection: "column",
//             paddingTop: "20px",
//           }}
//         >
//           <PulseLoader color={"#FFF"} />
//         </div>
//       ) : (
//         <form className="reset-password-form" onSubmit={handleSubmit}>
//           <h3 className="reset-password-title">Reset Password</h3>
//           {success ? (
//             <span className="success-message">
//               Success ! <Link to="/login">Login</Link>
//             </span>
//           ) : (
//             <>
//               {fields.map((field) => (
//               <Input
//               key={field.id}
//               type={field.type}
//               className={field.className}
//               id={field.id}
//               placeholder={field.placeholder}
//               autoComplete={field.autoComplete}
//               handleChange={handleChange}
//               value={passwordState[field.id]}
//               required={field.required}
//               labelText={field.labelText}
//               htmlFor={field.htmlFor}
//                 />
//               ))}  
//               <div className="submit-btn">
//                 <button type="submit" className="btn submit-button" onSubmit={handleSubmit}>
//                   Reset Password
//                 </button>
//               </div>
//             </>
//           )}
//         </form>
//       )}
//     </div>
//   );
// };

// export default ResetPassword;
