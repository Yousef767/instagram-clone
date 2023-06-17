import React from "react";
import menu from "../icons/menu.svg";
import profile from "../icons/profile.jpg";
import plus from "../icons/plus.svg";
const Profile = () => {
  return (
    <div className="cahtsContainer bb pt">
      <div className="profileNav">
        <span>Jo_ahmedd_</span>
        <img src={menu} alt="" />
      </div>
      <div className="stat">
        <img src={profile} alt="" />
        <div className="stats">
          <div className="st">
            <span>0</span>
            <span>posts</span>
          </div>
          <div className="st">
            <span>12.4K</span>
            <span>Followes</span>
          </div>
          <div className="st">
            <span>86</span>
            <span>Following</span>
          </div>
        </div>
      </div>
      <div className="bio">
        <span>Yousef Ahmed</span>
        <p>
          Computer Science || MU <br />
          Front-End Developer
        </p>
        <a href="https://yousef-portfolio.netlify.app/">
          yousef-portfolio.netlify.app
        </a>
      </div>
      <div className="profileBtns">
        <button>Edit Profile</button>
        <button>Edit Profile</button>
      </div>
      <div className="bio">
        <p>Story highlights</p>
        <p>Keep your favourite stories on your profile</p>
        <div className="new">
          <div className="add">
            <img src={plus} alt="" />
          </div>
          <span>New</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
