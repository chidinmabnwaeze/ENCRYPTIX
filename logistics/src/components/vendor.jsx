import React from "react";
import { dispatch } from "../constant/asset";
// import image from "../assets/images/dispatch ride.png"

export default function Vendor() {
  return (
    <div className="vendor">
      <div className="box">
        <div className="text-section">
          <h2>Are you a small logistics company?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            provident debitis dolores distinctio officiis quibusdam aspernatur
            adipisci fugit. Maiores quo cupiditate quia animi ratione soluta
            culpa nostrum deleniti et tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            provident debitis dolores distinctio officiis quibusdam aspernatur
            adipisci fugit. Maiores quo cupiditate quia animi ratione soluta
            culpa nostrum deleniti et tenetur.
          </p>

          <button className="vendor-button">Become a Vendor</button>
        </div>
        <div className="img-section">
          <img src={dispatch} alt="" />
        </div>
      </div>
    </div>
  );
}
