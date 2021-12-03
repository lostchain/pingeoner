import React from "react";
import SinglePost from "../../../components/SinglePost/SinglePost";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="sidebar">
        <h1>SIDEBAR</h1>
      </div>
      <div className="postsSection">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
      </div>
      <div className="rightSidebar">
        <h1>SIDEBAR</h1>
      </div>
    </div>
  );
};

export default MainPage;
