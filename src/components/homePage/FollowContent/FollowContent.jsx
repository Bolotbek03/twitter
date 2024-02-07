import React from "react";
import img from "../../../testImage/ghost.jpg";
import "./FollowContent.css"; // Импортируем стили

const FollowContent = () => {
  return (
    <div className="follow-content">
      <div className="follow-header">
        <div className="follow-title">Who to follow</div>
      </div>
      <div className="follow-user">
        <div className="user-card">
          <img className="user-avatar" src={img} alt="User Avatar" />
          <div className="user-info">
            <h5 className="user-name">Elon Musk</h5>
            <p className="user-handle">@elonmusk</p>
          </div>
          <button className="follow-button">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default FollowContent;
