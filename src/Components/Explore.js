import React, { Fragment, useState } from "react";
import e1 from "../explore/e1.jpg";
import e2 from "../explore/e2.jpg";
import e3 from "../explore/e3.jpg";
import e4 from "../explore/e4.jpg";
import e5 from "../explore/e7.jpg";
import search from "../icons/search.svg";
const Explore = ({ users }) => {
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
  const focusSearch = () => {
    let inner = document.querySelector(".exSearchResult");
    inner.style.display = "flex";
  };
  const hideRecent = () => {
    let inner = document.querySelector(".exSearchResult");
    inner.style.display = "none";
  };
  return (
    <section className="explore">
      <div className="exSearchInput">
        <input
          type="text"
          placeholder="Search"
          onChange={(el) => {
            filterSearch(el, users);
          }}
          onFocus={focusSearch}
        />
        <img src={search} alt="" />
        <button className="sb" onClick={hideRecent}>
          x
        </button>
        <div className="exSearchResult">
          <div className="recentInner">
            {filterd.length === 0 ? (
              <Fragment>
                <h2>Recent</h2>
                <span>No recent searches.</span>
              </Fragment>
            ) : (
              filterd.map((e, i) => (
                <div className="exResult" key={i}>
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
      <div className="container">
        <div className="long">
          <img src={e5} alt="" />
        </div>
        <div className="square square1">
          <img src={e2} alt="" />
        </div>
        <div className="square square2">
          <img src={e3} alt="" />
        </div>
        <div className="square square3">
          <img src={e4} alt="" />
        </div>
        <div className="square square4">
          <img src={e1} alt="" />
        </div>
      </div>
      
      <div className="container" dir="rtl">
        <div className="long">
          <img src={e5} alt="" />
        </div>
        <div className="square square1">
          <img src={e2} alt="" />
        </div>
        <div className="square square2">
          <img src={e3} alt="" />
        </div>
        <div className="square square3">
          <img src={e4} alt="" />
        </div>
        <div className="square square4">
          <img src={e1} alt="" />
        </div>
      </div>
      <div className="container">
        <div className="long">
          <img src={e5} alt="" />
        </div>
        <div className="square square1">
          <img src={e2} alt="" />
        </div>
        <div className="square square2">
          <img src={e3} alt="" />
        </div>
        <div className="square square3">
          <img src={e4} alt="" />
        </div>
        <div className="square square4">
          <img src={e1} alt="" />
        </div>
      </div>
      <div className="container" dir="rtl">
        <div className="long">
          <img src={e5} alt="" />
        </div>
        <div className="square square1">
          <img src={e2} alt="" />
        </div>
        <div className="square square2">
          <img src={e3} alt="" />
        </div>
        <div className="square square3">
          <img src={e4} alt="" />
        </div>
        <div className="square square4">
          <img src={e1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Explore;
