import React, { useEffect } from "react";
import home from "../../image/Home.svg";
import search from "../../image/iconSearch.svg";
import notification from "../../image/Notification.svg";
import messages from "../../image/Message.svg";
import lists from "../../image/lists.svg";
import communities from "../../image/communities.svg";
import twitter from "../../image/twitter.svg";
import premium from "../../image/premium.svg";
import profile from "../../image/Profile.svg";
import more from "../../image/More.svg";
import "./Panel.css";
import { useAuth } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Panel = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="panel-container">
      <div className="content-container">
        <div
          className="twitter-logo-container"
          onClick={() => navigate("/home")}
        >
          <img src={twitter} alt="" className="twitter-logo" />
        </div>
        <div className="menu-item" onClick={() => navigate("/home")}>
          <div className="icon-container">
            <img src={home} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Home</h5>
          </div>
        </div>
        <div className="menu-item" onClick={() => navigate("/explore")}>
          <div className="icon-container">
            <img src={search} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Explore</h5>
          </div>
        </div>
        <div className="menu-item" onClick={() => navigate("/notification")}>
          <div className="icon-container">
            <img src={notification} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Notification</h5>
          </div>
        </div>
        <div className="menu-item" onClick={() => navigate("/message")}>
          <div className="icon-container">
            <img src={messages} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Message</h5>
          </div>
        </div>
        <div className="menu-item" onClick={() => navigate("/lists")}>
          <div className="icon-container">
            <img src={lists} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Lists</h5>
          </div>
        </div>
        <div className="menu-item" onClick={() => navigate("/communities")}>
          <div className="icon-container">
            <img src={communities} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Communities</h5>
          </div>
        </div>
        <div className="menu-item" onClick={() => navigate("/profile")}>
          <div className="icon-container">
            <img src={profile} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Profile</h5>
          </div>
        </div>
        <div className="menu-item">
          <div className="icon-container">
            <img src={premium} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>Premium</h5>
          </div>
        </div>
        <div className="menu-item">
          <div className="icon-container">
            <img src={more} alt="" className="menu-icon" />
          </div>
          <div className="menu-text">
            <h5>More</h5>
          </div>
        </div>
      </div>
      <div className="post-item">
        <div className="post-container">
          <button className="post-button">Post</button>
        </div>
      </div>
      <div className="profile-container">
        <div className="img-container">
          <img src="" alt="" />
        </div>
        <div className="name-container">
          <p>Name</p>
          {user ? <p>{user}</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Panel;
