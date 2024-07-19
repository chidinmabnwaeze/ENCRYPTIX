import React from "react";
import ReactDOM from "react-dom";


function header() {
  return (
    <div>
       <header className="theheader">
        <nav className="navbar">
          <div className="nav-logo">
            <p>
              Logi<span>Hub</span>
            </p>
          </div>

          <ul className="nav-menu">
            <li className="nav-list">
              <a className="nav-link" href="../home">
                Home
              </a>
            </li>

            <li className="nav-list">
              <a className="nav-link" href="">
                Become a Vendor
              </a>
            </li>

            <li className="nav-list">
              <a className="nav-link" href="">
                Support
              </a>
            </li>

            <li className="nav-list">
              <a className="nav-link" href="../userdash">
                About
              </a>
            </li>
          </ul>

          <div className="signupButtons">
          <button className="login" ><a href="./login">Login</a> </button>
            <button className="register"><a href="./signup">Register</a></button>
          </div>
        </nav>
      </header> 
    </div>
  );
}

export default header;
