import react from "react";

import { apple, fb, google, lock } from "../constant/asset";

export default function Login() {
  return (
    <div className="Login">
      <div className="image-div">
        <img className="padlock" src={lock} alt="" />
      </div>
      <div className="login-input">
        <div className="first-part">
        <div className="welcome">
          <h2 className="welcome-head">Welcome Back!</h2>
          <p className="welcome-text"> Lorem ipsum dolor sit amet sit amet.</p>
        </div>
        <div className="icons">
          <img className="icon1" src={google} alt="google" />
          <img className="icon2" src={apple} alt="apple" />
          <img className="fb" src={fb} alt="facebook" />
        </div>
        </div>

        <div className="or">
         <hr className="left"></hr> 
          <span>
            OR
          </span>
          <hr className="right" />
        </div>

        <form action="submit">
          <label className="email" htmlFor="email">
            <p className="pass">Email</p>
            <input type="text" placeholder="@gmail.com" />
          </label>
          <label htmlFor="password">
            <p className="pass">Password</p>
            <input type="text" placeholder="Enter Password" />
          </label>
          <div className="remember-reset">
            <div className="remember">
              <input type="checkbox" />
              <p id=""> Remember me</p>
            </div>
            <div className="reset">
              <a className="reset-pass" href="">Reset Password</a>
            </div>
          </div>
          <div className="login-button">
            <button className="log">Login</button>
          </div>
          <div className="dont-have">
            <p id="dont" className="dontt">
              Don't have an account? 
              <span className="signup">
                <a href="./signup">Sign up</a>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
