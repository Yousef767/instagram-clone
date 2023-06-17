import React from "react";
import reel from "../posts/reel.mp4";
import profile from "../icons/story.jpg";
import heart from "../icons/heart.svg";
import dots from "../icons/dots.svg";
import comment from "../icons/comment.svg";
import share from "../icons/share.svg";
import save from "../icons/save.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
const Reels = () => {
  const playVideo = (e) => {
    if (e.target.classList.contains("play")) {
      e.target.classList.remove("play");
      e.target.pause();
    } else {
      e.target.classList.add("play");
      e.target.play();
    }
  };
  return (
    <div className="cahtsContainer p0 ">
      <Swiper
        direction={"vertical"}
        mousewheel={true}
        modules={[Mousewheel]}
        className="realsInner"
      >
        <SwiperSlide>
          <div className="real">
            <div className="video">
              <video src={reel} onClick={playVideo}></video>
              <div className="videoInfo">
                <span>
                  <img src={profile} alt="" />
                  <p>
                    User_Name<span className="follow">Follow</span>
                  </p>
                </span>
                <p>Video caption</p>
              </div>
            </div>
            <div className="reacts">
              <div className="recInner">
                <div className="react">
                  <img src={heart} alt="" />
                  <span>1.3M</span>
                </div>
                <div className="react">
                  <img src={comment} alt="" />
                  <span>1,579</span>
                </div>
                <div className="react">
                  <img src={share} alt="" />
                </div>
                <div className="react">
                  <img src={save} alt="" />
                </div>
                <div className="react">
                  <img src={dots} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="real">
            <div className="video">
              <video src={reel} onClick={playVideo}></video>
              <div className="videoInfo">
                <span>
                  <img src={profile} alt="" />
                  <p>
                    User_Name<span className="follow">Follow</span>
                  </p>
                </span>
                <p>Video caption</p>
              </div>
            </div>
            <div className="reacts">
              <div className="recInner">
                <div className="react">
                  <img src={heart} alt="" />
                  <span>1.3M</span>
                </div>
                <div className="react">
                  <img src={comment} alt="" />
                  <span>1,579</span>
                </div>
                <div className="react">
                  <img src={share} alt="" />
                </div>
                <div className="react">
                  <img src={save} alt="" />
                </div>
                <div className="react">
                  <img src={dots} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="real">
            <div className="video">
              <video src={reel} onClick={playVideo}></video>
              <div className="videoInfo">
                <span>
                  <img src={profile} alt="" />
                  <p>
                    User_Name<span className="follow">Follow</span>
                  </p>
                </span>
                <p>Video caption</p>
              </div>
            </div>
            <div className="reacts">
              <div className="recInner">
                <div className="react">
                  <img src={heart} alt="" />
                  <span>1.3M</span>
                </div>
                <div className="react">
                  <img src={comment} alt="" />
                  <span>1,579</span>
                </div>
                <div className="react">
                  <img src={share} alt="" />
                </div>
                <div className="react">
                  <img src={save} alt="" />
                </div>
                <div className="react">
                  <img src={dots} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="real">
            <div className="video">
              <video src={reel} onClick={playVideo}></video>
              <div className="videoInfo">
                <span>
                  <img src={profile} alt="" />
                  <p>
                    User_Name<span className="follow">Follow</span>
                  </p>
                </span>
                <p>Video caption</p>
              </div>
            </div>
            <div className="reacts">
              <div className="recInner">
                <div className="react">
                  <img src={heart} alt="" />
                  <span>1.3M</span>
                </div>
                <div className="react">
                  <img src={comment} alt="" />
                  <span>1,579</span>
                </div>
                <div className="react">
                  <img src={share} alt="" />
                </div>
                <div className="react">
                  <img src={save} alt="" />
                </div>
                <div className="react">
                  <img src={dots} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reels;
