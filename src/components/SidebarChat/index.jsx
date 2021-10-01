import { Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./styles.css";
export default function SidebarChat({addNewChat}) {
 
    const [ seed, setSeed ] = useState('')
  
    useEffect(() => {
     setSeed(Math.floor(Math.random() *5000))
    }, [])
    const createChat = (e) => {
        const roomName = prompt("Ingrese el nombre para el chat")

        if(roomName){
            //ALGUNAS COSAS DE DATABESE
        }
    }
    return !addNewChat ?(
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ):(
      <div onClick={createChat} className="sidebarChat">
        <h2>Agregar nuevo chat</h2>
      </div>
  )
}
