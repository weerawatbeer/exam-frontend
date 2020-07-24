import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Title from "../title/Title";

const JoinRoom = () => {
  const history = useHistory();
  const { room } = useSelector((state) => state);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name !== "") {
      const searchRoom = room.find((r) => r.name === name);
      if (searchRoom) {
        history.push(`/room/${name}`);
      } else {
        alert("ไม่มีชื่อห้องดังกล่าว");
      }
    }
  };

  const handleInput = ({ target }) => {
    setName(target.value);
  };

  return (
    <div className="container-form">
      <Title text={"เข้าร่วมแชท"} />
      <input
        className="input"
        type="text"
        name="name"
        value={name}
        onChange={handleInput}
      ></input>
      <div>
        <div className="btn-group">
          <Link to={`/lobby`}>
            <button className="btn-text">กลับ</button>
          </Link>

          <button className="btn-submit" onClick={() => handleSubmit()}>
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
