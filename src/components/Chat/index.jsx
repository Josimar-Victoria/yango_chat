import React, { useEffect, useState } from "react";
import { Avatar, Button, IconButton } from "@material-ui/core";
import "./styles.css";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@material-ui/icons";
import { useParams } from "react-router";
import db from "../../firebase";
export default function Chat() {
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(">>>", input);
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${Math.floor(
            Math.random() * 5000
          )}.svg`}
        />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>last seen at ....</p>
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
        <p className={`chat__message ${true && "chat__reciver"}`}>
          <span className="chat__name">harry</span>
          hola como estas
          <span className="chat__timestamp">3:54</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticon />
        </IconButton>
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Envia mesaje"
          />
          <Button type="submit">Enviar</Button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  );
}
