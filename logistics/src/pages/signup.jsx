import react from "react";
import Header from "../components/header";


export default function Signup (){
    return (
        <div className="sign-up">
       <Header/> 
       <div className="as-customer">
        <div className="customer">
            <h1 className="customer-head">Sign Up as a customer</h1>
            <p className="customer-text">Send your goods fast, cheap, comfortable and safe</p>
            <button className="start">Get Started</button>
        </div>
       </div>

       <div className="as-vendor">
        <div className="a-vendor">
            <h1 className="vendor-head">Become a vendor</h1>
            <p className="vendor-text">Do you own a small logistics business and you will like to increase <br></br> your customer reach, and double your earning?, become a vendor <br></br> of logiHub,  you register your vehicles with us, we send you <br></br> customers.</p>
            <button className="start">Get Started</button>
        </div>
       </div>
    </div>
    )
    
}