import React from 'react'

const Signup = () => {
  return (
    <div className='sign-section'>
        <div className='login-body'>
        <div className='field'>
            <h1><span>Sign Up</span></h1>
            <div className='fname labelIcon'>
                <label className='fname_placeholder'>Full Name</label>
                <input type="text" id="nameField" name="firstname" className='fname-input input-box' aria-label='Enter your name'/>
            </div>
            <div className='lname labelIcon'>
                <label className='lname_placeholder'>Last Name</label>
                <input type="text" id="nameField" name="lastname" className='lname-input input-box' aria-label='Enter your name'/>
            </div>
            <div className="emailAddress labelIcon">
                <label className="email_placeholder">Email Id</label>
                <input className="email-input input-box" id="email" name="email" type="email" aria-label="Enter your email"/>
            </div>
            <div className="password-container labelIcon">
                    <label className="pass_placeholder">Create Password</label>
                    <input className="pswd-input input-box" name="password" type="password" aria-label="Enter password for your account"/>
            </div>
            <div className="sgnbtn">
                <input className="signupbtn btn" id="signupbtn" onclick="" type="submit" value="Get started" />
            </div>
            <div className='login'>
                <span>Have an account?</span>
                <a href='/'>Login</a>
            </div>
        </div>        
    </div>
    </div>
  )
}

export default Signup