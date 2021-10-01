import { Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, SearchOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import db from "../../firebase";
import SidebarChat from "../SidebarChat";
import "./styles.css";

export default function Sidebar() {
  const [seed, setSeed] = useState("");
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    const unsubcribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search" type="text" className="" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map(({ id, data: { name } }) => (
          <SidebarChat key={id} id={id} name={name} />
        ))}
      </div>
    </div>
  );
}
