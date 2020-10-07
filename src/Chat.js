import React from "react";
import "./Chat.css";
import { Avatar } from "@material-ui/core";

export function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
        </div>
      </div>
    </div>
  );
}
