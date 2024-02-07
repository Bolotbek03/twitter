import React from "react";
import FollowContent from "../FollowContent/FollowContent";
import "./RightPanel.css"; // Импортируем стили

const RightPanel = () => {
  return (
    <div className="right-panel">
      <div className="search-box">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="premium-subscription">
        <h5>Subscribe to Premium</h5>
        <p>
          Subscribe to unlock new features and if eligible, receive a share of
          ads revenue.
        </p>
        <button>Subscribe</button>
      </div>
      <div className="trends">
        <h5>Trends for you</h5>
      </div>
      <div className="follow-content-container">
        <FollowContent />
      </div>
    </div>
  );
};

export default RightPanel;
