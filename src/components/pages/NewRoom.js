import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRoom } from "../../store/actions/roomActions";
import Title from "../title/Title";

const NewRoom = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { room } = useSelector((state) => state);
  const [newroom, setNewRoom] = useState({
    room_name: "",
  });

  const { room_name } = newroom;
  const handleSubmit = () => {
    if (room_name !== "") {
      const searchRoom = room.find((r) => r.name === room_name);
      if (searchRoom) {
        alert("มีชื่อห้องดังกล่าวแล้ว");
        setNewRoom({ room_name: "" });
      } else {
        dispatch(addRoom(newroom));
        history.push(`/room/${room_name}`);
      }
    } else {
      alert("กรุณาระบุชื่อห้อง");
    }
  };

  const handleInput = (e) =>
    setNewRoom({ ...newroom, [e.target.name]: e.target.value });

  return (
    <div className="container-form">
      <Title text={"สร้างห้องใหม่"} />
      <input
        className="input"
        type="text"
        name="room_name"
        value={room_name}
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

export default NewRoom;
