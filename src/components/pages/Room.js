import React, { useState, useEffect, Fragment } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Room = () => {
  const history = useHistory();
  const { room } = useSelector((state) => state);
  const { user } = useSelector((state) => state.user);
  const { room_name } = useParams();
  const [name, setName] = useState("");
  const [chat, setChat] = useState({
    name: "",
    room_owner: "",
    chat: [],
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    const searchRoom = room.find((r) => r.name === room_name);
    if (searchRoom) {
      setChat(searchRoom);
      setName(user);
    } else {
      alert("ไม่มีชื่อห้องดังกล่าว ระบบจะพาคุณไปที่หน้า Lobby");
      history.push("/lobby");
    }
  }, [user, room_name, room, history]);

  const handleSubmit = (e) => {
    const ms = message.trim();
    if (e.key === "Enter" && ms !== "") {
      setMessage("");
    }
  };

  const handleInput = ({ target }) => {
    setMessage(target.value);
  };
  return (
    <Fragment>
      <div className="container-chat">
        <span className="title-2">ห้อง {room_name}</span>
        <div className="chat">
          <div className="chat-display">
            {chat.chat.map((item, index) => {
              if (name === item.owner)
                return (
                  <div key={index} className="box chat-right">
                    <section>คุณ {item.owner}</section>
                    <div className="message-box">{item.text}</div>
                  </div>
                );
              else
                return (
                  <div key={index} className="box">
                    <section>คุณ {item.owner}</section>
                    <div className="message-box">{item.text}</div>
                  </div>
                );
            })}
          </div>
          <div className="wrapper text-center">
            <input
              className="input-chat"
              value={message}
              onChange={handleInput}
              onKeyPress={handleSubmit}
              type="text"
            ></input>
            <small className="label-chat">Enter เพื่อส่ง</small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Room;
