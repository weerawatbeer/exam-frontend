import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Title from "../title/Title";

const Lobby = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="container-form">
      <Title text={"คุณ " + user + ""} />
      <div className="pd-3">
        <Link to={`/new`}>
          <button className="btn-submit">สร้างห้องใหม่</button>
        </Link>
      </div>
      <Link to={`/join`}>
        <button className="btn-text">เข้าร่วมแชท</button>
      </Link>
    </div>
  );
};

export default Lobby;
