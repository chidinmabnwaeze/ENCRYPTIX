import React from "react";
import Header from "../components/headProfile";
import Footer from "../components/footer";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export default function request() {
  const [pickUpCount, setPickupCount] = useState([
    {
      id: 1,
      item: "",
    },
  ]);
  let somthing= 0
  somthing=8

  const fieldRef = useRef(null)
 useEffect(()=>{
    if(fieldRef.current){
        // fieldRef.current.style=
    }
 },[])

  return (
    <div ref={fieldRef} className="request-pd">
      <Header />
      <div className="wholeParcelPage">
        <div className="requestheading">
          <h2>Request Parcel Delivery</h2>
        </div>

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

        <div className="bodyForms">
          <div className="pickup">
            <div className="pickupHead">
              <h3>Pickup details</h3>
              <hr />
            </div>

            <form action="submit">
              {/* <div className="customerName"> */}
              <label htmlFor="name">
                <p>
                  Customer's name <span className="asterisk">*</span>
                </p>
                <input className="input" type="text" id="name" />
              </label>

              <label htmlFor="email">
                <p>
                  Email <span className="asterisk">*</span>
                </p>
                <input className="input" type="text" id="email" />
              </label>

              <label htmlFor="phoneNumber">
                <p>
                  Pickup Phone number <span className="asterisk">*</span>
                </p>
                <input className="input" type="tel" id="phoneNumber" />
              </label>

              <label htmlFor="address">
                <p>
                  Address <span className="asterisk">*</span>
                </p>
                <input className="input" type="text" id="address" />
              </label>

              <label htmlFor="category">
                <p>
                  Category <span className="asterisk">*</span>
                </p>
                <input
                  className="input"
                  type="text"
                  id="category"
                  placeholder="Select category"
                />

                <select id="category">
                  <option value="Parcel" id="category">
                    Parcel delivery
                  </option>
                  <option value="Parcel" id="category">
                    Parcel delivery
                  </option>
                  <option value="Parcel" id="category">
                    Parcel delivery
                  </option>
                </select>
              </label>
              {/* </div> */}
            </form>
          </div>

          <div className="deliveryPoint1">
            <div className="deliveryHead">
              <p>Delivery Point 1 </p>
              <hr />
            </div>
            <form action="">
              <label htmlFor="rName" aria-required>
                <p>
                  Receipient's Name <span className="asterisk">*</span>
                </p>
                <input className="input" type="text" id="rName" />
              </label>

              <label htmlFor="pPhone">
                <p>
                  Pickup Phone Number <span className="asterisk">*</span>
                </p>
                <input className="input" type="text" id="pPhone" />
              </label>

              {/* needs javscript to be able to add a new delivery point */}
              <div className="addDelivery">
                <div>
                  {pickUpCount.map((item, index) => (
                    <label key={index} htmlFor="pAddress" aria-required>
                      <p>
                        Pickup Address <span className="asterisk">*</span>
                      </p>
                      <input className="input" type="text" id="pAddress" />
                    </label>
                  ))}
                </div>

                <button type="button" onClick={()=>{
                    console.log(pickUpCount)
                     setPickupCount([
                        ...pickUpCount,
                        { id: pickUpCount.length++, name: `${pickUpCount.length++} name` }
                      ]);
                    // setPickupCount({
                    //     ...pickUpCount,

                    // })
                }} className="newDelivery">
                  <p className="add">+ Add another delivery point</p>
                </button>
              </div>

              {/* needs javscript to be able to schedule delivery time */}
              <label htmlFor="pTime">
                <p>Pickup Time</p>
                <input className="input" type="text" id="pTime" />
              </label>
            </form>
          </div>
        </div>

        <div className="proceed-button">
          <button id="next" className="proceedToNext">
            <a id="next" href="./request2">
              Proceed
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
