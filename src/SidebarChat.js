import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

export const SidebarChat = () => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h1>Room name</h1>
        <p>Last message in room</p>
      </div>
    </div>
  );
};
