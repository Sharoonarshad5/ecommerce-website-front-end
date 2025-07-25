import React from 'react'
import './CSS/loginSingup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsigup-container">
        <h1>Sign up</h1>
        <div className="loginsinup-fields">
          <input type="text" placeholder='YOUR NAME' />
          <input type="email"placeholder='Enter your emali' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">All have an account?
          <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the trems of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
