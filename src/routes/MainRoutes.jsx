import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import Panel from "../components/homePage/Panel";
import Explore from "../components/content/Menu/Explore/Explore";
import Home from "../components/homePage/Home";
import Notification from "../components/content/Menu/Notification/Notification";
import Message from "../components/content/Menu/Message/Message";
import Lists from "../components/content/Menu/Lists/Lists";
import Communities from "../components/content/Menu/Communities/Communities";
import Profile from "../components/content/Menu/Profile/Profile";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/menu" element={<Panel />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/message" element={<Message />} />
      <Route path="/lists" element={<Lists />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default MainRoutes;
