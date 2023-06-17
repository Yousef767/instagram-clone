import React from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Suggestions from "./Suggestions";
import instaLogo from "../icons/instagram-text.svg";
import heart from "../icons/heart.svg";
import messages from "../icons/messages.svg";
import dots from "../icons/dots.svg";
import comment from "../icons/comment.svg";
import share from "../icons/share.svg";
import save from "../icons/save.svg";
import { Link } from "react-router-dom";
const Posts = ({ sugUsers, stories, posts }) => {
  const showPost = (e) => {
    let post = e.target.nextElementSibling;
    if (e.target.value !== "") {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  };
  const handlePosts = posts.map((e, i) => (
    <div className="post" key={i}>
      <header>
        <div className="acc">
          <img src={require(`../profiles/${e.img}`)} alt="" />
          <span>{e.userName}</span>
        </div>
        <img src={dots} alt="" />
      </header>
      <div className="post-img">
        <img src={require(`../posts/${e.post}`)} alt="" />
      </div>
      <div className="post-react">
        <div className="leftIcons">
          <img src={heart} alt="" />
          <img src={comment} alt="" />
          <img src={share} alt="" />
        </div>
        <img src={save} alt="" />
      </div>
      <div className="post-disc">
        <span className="likes">{e.likes} likes</span>
        <span className="dis">
          <span className="accName">{e.userName} </span>
          {e.disc}
        </span>
        <span className="viewComments">View all comments</span>
        <div className="input">
          <input
            type="text"
            placeholder="Add a comment..."
            onChange={showPost}
          />
          <div className="addComment">Post</div>
        </div>
      </div>
    </div>
  ));
  return (
    <section className="posts">
      <div className="post-inner">
        <div className="phoneNav">
          <img src={instaLogo} alt="" />
          <div className="two">
            <Link to="/notifications">
              <img src={heart} alt="" />
            </Link>
            <Link to="/chats">
              <img src={messages} alt="" />
              <span className="count">11</span>
            </Link>
          </div>
        </div>
        <div className="stories">
          <Swiper
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
            breakpoints={{
              200: {
                width: 200,
                slidesPerView: 3,
              },
              300: {
                width: 300,
                slidesPerView: 3.75,
              },
              400: {
                width: 400,
                slidesPerView: 4.5,
              },
              500: {
                width: 500,
                slidesPerView: 6,
              },
            }}
          >
            {stories.map(({ userName, img }, i) => (
              <SwiperSlide key={i}>
                <div className="story">
                  <div className="story-img">
                    <img src={require(`../profiles/${img}`)} alt="" />
                  </div>
                  <p>
                    {userName}
                    {i + 1}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="posts-inner">{handlePosts}</div>
      </div>
      <Suggestions users={sugUsers} />
    </section>
  );
};

export default Posts;
