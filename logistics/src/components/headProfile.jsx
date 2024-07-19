import React from "react";
import ReactDOM from "react-dom";
import { pic1 } from "../constant/asset";


function header() {
  return (
    <div>
       <header className="headeruser">
        <nav className="navbar">
          <div className="nav-logo">
            <p>
              Logi<span>Hub</span>
            </p>
          </div>

          <ul className="nav-menu">
            <li className="nav-list">
              <a className="nav-link" href="">
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
              <a className="nav-link" href="">
                About
              </a>
            </li>
          </ul>

          <div className="headerpic">
           <img src={pic1} alt="" />
          </div>
        </nav>
      </header> 
    </div>
  );
}

export default header;
