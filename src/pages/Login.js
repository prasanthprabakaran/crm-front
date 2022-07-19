import React from 'react'
import './Login.css';

const login = () => {
  return (
    <div className='sign-section'>
        <div className='login-body'>
        <div className='field'>
            <h1><span>Login</span></h1>
            <div className="emailAddress labelIcon">
                <label className="email_placeholder">Email Id</label>
                <input className="email-input input-box" id="email" name="email" type="email" aria-label="Enter your email"/>
            </div>
            <div className="password-container labelIcon">
                    <label className="pass_placeholder">Password</label>
                    <input className="pswd-input input-box" name="password" type="password" aria-label="Enter password for your account"/>
            </div>
            <div className="sgnbtn">
                <input className="signupbtn btn" id="signupbtn" onclick="" type="submit" value="Log In" />
            </div>
            <div className='sign-up'>
                <span>Have an account?</span>
                <a href='/sign_up'>Sign Up</a>
            </div>
        </div>        
    </div>
    </div>
    
  )
}
export default login