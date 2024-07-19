import React from "react";

export default function progress(){
    return(
        <div className="progress">
        <div className="one">
          <div className="circle1">
            <p>1</p>
          </div>
         <div className="progress-title">
         <p className="progress-name">Shipping</p>
         </div>

        </div>

        <div className="hr-div">
          <hr className="theHr" />
        </div>

        <div className="two">
          <div className="circle2">
            <p>2</p>
          </div>
          <p className="progress-name">Payment</p>
        </div>
        <div className="hr-div">
          <hr />
        </div>

        <div className="three">
          <div className="circle3">
            <p>3</p>
          </div>
          <p className="progress-name">Confirmation</p>
        </div>
      </div>




    )
}