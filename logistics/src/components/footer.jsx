import react from "react";
import { facebook, instagram, linkedin, twitter } from "../constant/asset";

function Footer() {
  return (
    <div className="whole-footer">
      <div className="footer">

         <div className="footer1">
        <div className="footer-logo">
          <p>
            Logi<span>Hub</span>
          </p>
        </div>
        <div className="sm-links">
        <img className='facebook' src={facebook}></img>
        <img className='twitter' src={twitter} ></img>
        <img className='linkedin' src={linkedin} ></img>
        <img className='instagram' src={instagram}></img>
        </div>
        </div>

        <footer-links>
          <p className="footer-head">Company</p>
          <p className="footer-sub">Contact Us</p>
        </footer-links>

        <footer-links>
          <p className="footer-head">Legal</p>
          <p className="footer-sub">Privacy Policy</p>
          <p className="footer-sub">Terms of Service</p>
        </footer-links>

        <footer-links>
          <p className="footer-head">Help</p>
          <p className="footer-sub">Read our FAQs</p>
        </footer-links>

      </div>
      <div className="copy">
          <hr />
          <small>Copyright © 2022 LogiHub. All rights reserved.</small>
        </div>
    </div>
  );
}

export default Footer;
