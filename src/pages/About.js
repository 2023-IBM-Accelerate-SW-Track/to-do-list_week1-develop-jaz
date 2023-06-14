import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/Jazmyn_Jenkins_Current_Headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Jazmyn Jenkins</div>
            <div className="brief_description">
              I am a Computer Science major at Tuskegee University. I love to travel, be creative, be outside, and try new hobbies (currently into gardening). 
              I also love Harry Potter (team Hufflepuff), Disney, and musical theater. Something I am starting to fall in love with is community service,
              especially if it's outdoors. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}