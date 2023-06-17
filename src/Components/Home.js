import React, { useState } from "react";
import Posts from "./Posts";

const Home = () => {
  const [sugUsers] = useState([
    { userName: "user_name", name: "user name", imgSrc: "story.jpg" },
    { userName: "user_name", name: "user name", imgSrc: "story.jpg" },
    { userName: "user_name", name: "user name", imgSrc: "story.jpg" },
    { userName: "user_name", name: "user name", imgSrc: "story.jpg" },
    { userName: "user_name", name: "user name", imgSrc: "story.jpg" },
  ]);

  const [stories] = useState([
    { userName: "xu5gg", img: "i1.jpg" },
    { userName: "xvfg506", img: "i2.jpg" },
    { userName: "voidp50_305", img: "i3.jpg" },
    { userName: "tyh6090", img: "i4.jpg" },
    { userName: "you8_xr", img: "i5.jpg" },
    { userName: "kpt850", img: "i6.jpg" },
    { userName: "yuui950", img: "i7.jpg" },
    { userName: "lkrgr50", img: "i8.jpg" },
    { userName: "r20g_gg", img: "i9.jpg" },
    { userName: "yr80_rr", img: "i10.jpg" },
    { userName: "bnvr90", img: "i11.jpg" },
    { userName: "rdckf80", img: "i12.jpg" },
  ]);

  const [posts] = useState([
    {
      userName: "xu5gg",
      img: "i1.jpg",
      post: "p1.jpg",
      likes: "214",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "xvfg506",
      img: "i2.jpg",
      post: "p2.jpg",
      likes: "104",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "voidp50_305",
      img: "i3.jpg",
      post: "p3.jpg",
      likes: "24",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "tyh6090",
      img: "i4.jpg",
      post: "p4.jpg",
      likes: "14",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "you8_xr",
      img: "i5.jpg",
      post: "p5.jpg",
      likes: "1002",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "kpt850",
      img: "i6.jpg",
      post: "p6.jpg",
      likes: "980",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "r20g_gg",
      img: "i9.jpg",
      post: "p7.jpg",
      likes: "2050",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "yr80_rr",
      img: "i10.jpg",
      post: "p8.jpg",
      likes: "72",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "bnvr90",
      img: "i11.jpg",
      post: "p9.jpg",
      likes: "34",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      userName: "rdckf80",
      img: "i2.jpg",
      post: "p10.jpg",
      likes: "424",
      disc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ]);

  return (
    <section className="home">
      <Posts sugUsers={sugUsers} stories={stories} posts={posts} />
    </section>
  );
};

export default Home;
