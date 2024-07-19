import React from "react";
import { rec1, rec2, rec3, rec4 } from "../constant/asset";
import Header from "../components/headProfile";
import Footer from "../components/footer";

const dashboard = [
  {
    img: rec1,
    title: "Parcel Delivery",
    subject:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et.",
  },
  {
    img: rec2,
    title: "Truck Delivery",
    subject:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et.",
  },
  {
    img: rec3,
    title: "Office/Home relocation ",
    subject:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et.",
  },
  {
    img: rec4,
    title: "International Delivery",
    subject:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur autem corrupti soluta! Minima fuga repellat dolorem neque reiciendis.Nulla delectus odio magnam aut, quam rem corrupti reiciendis optio necessitatibus et.",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <div className="actions">
        {dashboard.map((dashBoard, index) => (
          <div className="action-card" key={index}>
            <img className="dash-img" src={dashBoard.img} alt="" />

            <div className="action-card-text">
              <h3 className="action-head">{dashBoard.title}</h3>
              <p className="action-text">{dashBoard.subject}</p>
              <button className="dash-button">Request delivery Now</button>
            </div>
            
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
