import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import "./styles.css";
export default function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = (e) => {
    const roomName = prompt("Ingrese el nombre para el chat");

    if (roomName) {
      //ALGUNAS COSAS DE DATABESE
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Agregar nuevo chat</h2>
    </div>
  );
}
