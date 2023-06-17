import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../icons/home.svg";
import explore from "../icons/explore.svg";
import heart from "../icons/heart.svg";
import reels from "../icons/reels.svg";
import post from "../icons/post.svg";
import messages from "../icons/messages.svg";
import instagram from "../icons/instagram.svg";
import instagramText from "../icons/instagram-text.svg";
import search from "../icons/search.svg";
import profile from "../icons/profile.jpg";
import menu from "../icons/menu.svg";
import graySearch from "../icons/gray-search.svg";
import notiImg from "../icons/story.jpg";
const IconsNav = ({ users }) => {
  const [filterd, setFilter] = useState([]);
  const filterSearch = (el, users) => {
    if (el.target.value !== "") {
      const filter = users.filter((e) => {
        return e.userName.includes(el.target.value);
      });
      setFilter([...filter]);
    } else {
      setFilter([]);
    }
  };
  const showSearch = (e) => {
    let search = document.querySelector(".search");
    search.classList.toggle("showSection");
    let searchIcon = document.querySelector(".searchIcon");
    searchIcon.classList.toggle("active");
    let notiIcon = document.querySelector(".notiIcon");
    notiIcon.classList.remove("active");
    let noti = document.querySelector(".noti");
    noti.classList.remove("showSection");
  };
  const showNoti = (e) => {
    let noti = document.querySelector(".noti");
    noti.classList.toggle("showSection");
    let notiIcon = document.querySelector(".notiIcon");
    notiIcon.classList.toggle("active");
    let searchIcon = document.querySelector(".searchIcon");
    searchIcon.classList.remove("active");
    let search = document.querySelector(".search");
    search.classList.remove("showSection");
  };
  const showCreate = (e) => {
    let create = document.querySelector(".create");
    create.classList.toggle("showCreate");
  };
  return (
    <nav className="leftNav">
      <Link to={"/"} className="icon-text">
        <img className="logo1" src={instagramText} alt="" />
        <img className="logo2" src={instagram} alt="" />
      </Link>
      <div className="links-inner">
        <Link to={"/"} className="icon-inner ">
          <img src={home} alt="" />
          <span>Home</span>
        </Link>
        <div className="icon-inner logo3 searchIcon" onClick={showSearch}>
          <img src={search} alt="" />
          <span>Search</span>
        </div>
        <Link to={"/explore"} className="icon-inner">
          <img className="exx" src={explore} alt="" />
          <img className="ex" src={search} alt="" />
          <span>Explore</span>
        </Link>
        <div className="icon-inner" onClick={showCreate}>
          <img src={post} alt="" />
          <span>Create</span>
          <div className="create">
            <p>Post</p>
            <p>Story</p>
          </div>
        </div>
        <Link to={"/reels"} className="icon-inner">
          <img src={reels} alt="" />
          <span>Reels</span>
        </Link>
        <Link to={"/chats"} className="icon-inner logo3">
          <img src={messages} alt="" />
          <span>Messages</span>
          <span className="count">11</span>
        </Link>
        <div className="icon-inner logo3 notiIcon" onClick={showNoti}>
          <img src={heart} alt="" />
          <span>Notifications</span>
        </div>
        <Link to={"/profile"} className="icon-inner">
          <img className="profile" src={profile} alt="" />
          <span>Profile</span>
        </Link>
        <div className="icon-inner menu">
          <img src={menu} alt="" />
          <span>More</span>
        </div>
      </div>
      <div className="search">
        <header>
          <h1>Search</h1>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                filterSearch(e, users);
              }}
            />
            <img src={graySearch} alt="" />
          </div>
        </header>
        <div className="recent">
          <h2>Recent</h2>
          <div className="recentResult">
            {filterd.length === 0 ? (
              <span>No recent searches.</span>
            ) : (
              filterd.map((e, i) => (
                <div className="result" key={i}>
                  <img src={require(`../profiles/${e.img}`)} alt="" />
                  <div className="wctre">
                    <p>{e.userName}</p>
                    <p>{e.name}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="noti">
        <h2>Notifications</h2>
        <div className="notiBox">
          <span>Today</span>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
        </div>
        <div className="notiBox">
          <span>This Month</span>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
        </div>
        <div className="notiBox">
          <span>Earlier</span>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
          <div className="notiInner">
            <div className="not">
              <img src={notiImg} alt="" />
              <div className="notInfo">user_name started following you.</div>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IconsNav;
