import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import "./Chat.css";
import {
  AttachFile,
  InsertEmoticon,
  InsertEmoticonOutlined,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";

function Chat() {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last seen at....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <div className={`chat__message ${true && "chat__reciever"}`}>
          <p>
            <span className="chat__name">devjoe</span>
            hey let's gooo
            <span className="chat__timestamp">7:15pm</span>
          </p>
        </div>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonOutlined />
        </IconButton>
        <form>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter a message"
          />
          <button onClick={sendMessage} type="submit">
            send message
          </button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
