import React from "react";
import img from "../icons/profile.jpg";
const Suggestions = ({ users }) => {
  const sugUsers = users.map(({ userName, name, imgSrc }, i) => (
    <div className="sug-user" key={i}>
      <div className="sugInfo">
        <img src={require(`../icons/${imgSrc}`)} alt="" />
        <div className="info">
          <span>
            {userName}
            {i + 1}
          </span>
          <span>{name}</span>
        </div>
      </div>
      <a className="link" href="##">
        Follow
      </a>
    </div>
  ));
  return (
    <section className="suggestions">
      <div className="current-user">
        <div className="userInfo">
          <img src={img} alt="" />
          <div className="info">
            <span>user_name</span>
            <span>user name</span>
          </div>
        </div>
        <a className="link" href="##">
          switch
        </a>
      </div>
      <header>
        <span>Suggestions for you</span>
        <a className="link" href="##">
          See All
        </a>
      </header>
      <div className="sug">{sugUsers}</div>
      <div className="footerLinks">
        <a href="##">About.</a>
        <a href="##">help.</a>
        <a href="##">press.</a>
        <a href="##">API.</a>
        <a href="##">jops.</a>
        <a href="##">privacy.</a>
        <a href="##">tirms.</a>
        <a href="##">Locations.</a>
        <a href="##">language</a>
      </div>
      <div className="copy">© 2023 INSTAGRAM FROM META</div>
    </section>
  );
};

export default Suggestions;
