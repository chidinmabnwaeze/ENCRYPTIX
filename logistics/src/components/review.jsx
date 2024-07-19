import React from "react";
import { pic1, pic2, pic3}  from "../constant/asset";

const reviews =[
{
img : pic1,
subject : " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perferendis, culpa? Quae, maiores suscipit? Placeat minima a sequi repudiandae molestiae dolorum sint esse alias odit maiores? Accusamus explicabo aliquid cupiditate odit?",
name :" Matt Joe",
status: "Client"
},
{
img : pic2,
subject : " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perferendis, culpa? Quae, maiores suscipit? Placeat minima a sequi repudiandae molestiae dolorum sint esse alias odit maiores? Accusamus explicabo aliquid cupiditate odit?",
name :" Matt Joe",
status: "Client"
},
{
img : pic3,
subject : " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Perferendis, culpa? Quae, maiores suscipit? Placeat minima a sequi repudiandae molestiae dolorum sint esse alias odit maiores? Accusamus explicabo aliquid cupiditate odit?",
name :" Matt Joe",
status: "Client"
}

]

export default function Reviews (){
   return(
    <div className="reviews">
        <div className="review-texts">
    <h2 className="review-title">What our clients say about us !</h2>
    <p className="review-subtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Officia ipsam voluptatibus recusandae ut, natus commodi reiciendis sunt mollitia minus maiores eaque sint at quod id dolores exercitationem accusamus debitis inventore.</p>
        </div>

   <div className="review-cards">
    {reviews.map((review, index)=>(
        <div className="review-card" key={index}> 
        <img className="profile-pic" src={review.img} alt="" />
        <p className="subject">
            {review.subject}
        </p>
        <p className="name">{review.name}</p>
        <p className="status">{review.status}</p>
    </div>
    ))
        
    }
    
   </div>
   </div>
   )
}