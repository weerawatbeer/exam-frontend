import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/actions/userActions";
import Title from "../title/Title";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (show) {
      dispatch(setUser(name));
      history.push("/lobby");
    }
  };

  const handleChange = ({ target }) => {
    setName(target.value);
    if (target.value !== "") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="container-form">
      <Title text={"ชื่อของคุณ"} />
      <input
        className="input"
        type="text"
        value={name}
        onChange={handleChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      ></input>
      {show ? (
        <button className="btn-submit" onClick={handleSubmit}>
          ยืนยัน
        </button>
      ) : null}
    </div>
  );
};
export default Home;
